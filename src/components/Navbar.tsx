import { Button, Container } from '@mui/material'
import { ExitToApp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const login = localStorage.getItem('user');
    const navigate = useNavigate();

  return (
    <Container maxWidth={false} style={{ height: '80px', background:"lightgreen",position:'sticky',padding:'10px',top:'0px',zIndex:'3'}} >

     <Button variant="text" onClick={()=>navigate('/')}  sx={{color:'black',fontSize:'20px',lineHeight:'45px'}}>Menu</Button>
     <Button variant="text" onClick={()=>navigate('/department')} sx={{color:'black',fontSize:'20px',lineHeight:'45px'}}>DepartMent</Button>
    {
       login && <Button variant="text" sx={{color:'black',fontSize:'20px',lineHeight:'45px',position:'absolute',right:'25px',top:'25px'}} onClick={()=>{
        localStorage.clear();
        navigate('/signup')
     }} ><ExitToApp/></Button>
    }

    </Container>

  )
}

export default Navbar