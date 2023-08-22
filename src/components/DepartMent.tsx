import React, { useState } from 'react';
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const jsonData = [
   {
     "department": "customer_service",
     "sub_departments": [
       "support",
       "customer_success"
     ]
   },
   {
     "department": "design",
     "sub_departments": [
       "graphic_design",
       "product_design",
       "web_design"
     ]
   }
 ];




const DepartMent = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [SecSkills, setSecSkills] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>,i:string) => {
    const skill = event.target.value;

    if(i === jsonData[0].department){
      if (skills.includes(skill)) {
        setSkills(skills.filter(existingSkill => existingSkill !== skill));
      } else {
        setSkills([...skills, skill]);
      }
    }else{
      if (SecSkills.includes(skill)) {
        setSecSkills(SecSkills.filter(existingSkill => existingSkill !== skill));
      } else {
        setSecSkills([...SecSkills, skill]);
      }
    }
   
  };

  const handleAllSkillsChange = (depart:string) => {
    if(depart === jsonData[0].department){
        if (skills.length === 2) {
          setSkills([]);
        } 
      else {
          setSkills(['support', 'customer_success']);
        }
    }
    
          if(depart === jsonData[1].department){
            if (SecSkills.length === 3) {
              setSecSkills([]);
            } 
          else {
              setSecSkills(['graphic_design', 'product_design', 'web_design']);
            }

          }
    
    
  };
  
  const handleExpandClick = (department: string) => {
    setExpanded(expanded === department ? null : department);
  };

  return (
    <>
      <Box>
        <FormControl sx={{padding:"30px"}}>

          {
            jsonData.map((i,ind)=> (
              <FormGroup key={ind} >
                 <ExpandMoreIcon onClick={() => handleExpandClick(i.department)} sx={{cursor:'pointer'}} />
                {i.department  === 'customer_service' ?  <FormControlLabel
              label={`${i.department}`}
              control={
                <Checkbox
                  checked={skills.length === i.sub_departments.length}
                  onChange={()=>handleAllSkillsChange(i.department)}
                /> 
              }
            />: <FormControlLabel
            label={`${i.department}`}
            control={
              <Checkbox
                checked={SecSkills.length === i.sub_departments.length}
                onChange={()=>handleAllSkillsChange(i.department)}
              /> 
            }

          />
          
        }

         {

         expanded === i.department && i.sub_departments.map((j,index)=> (
              <FormControlLabel
              className='lab'
              sx={{paddingLeft:'30px'}}
              key={index}
              label={j}
              control={
                <Checkbox
                  value={j}
                  checked={skills.includes(j) || SecSkills.includes(j)}
                  onChange={(event)=>handleSkillChange(event,i.department)}
                />
              }
             
            />
            ))

         }
     
          </FormGroup>
            ))
           }
        </FormControl>

        {

        }
      </Box>
    </>
  );
};

export default DepartMent;
