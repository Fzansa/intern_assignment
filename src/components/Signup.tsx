import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate,useSearchParams } from 'react-router-dom';

export interface IUser {
  name: string;
  phone: number;
  email: string;
}

const Signup = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

 
  const [searchParams] = useSearchParams();
  const message = searchParams.get('msg');

  useEffect(() => {
    // const login: IUser = JSON.parse(localStorage.getItem('user'));
    const login: IUser | null = JSON.parse(localStorage.getItem('user') || 'null');

    if (login) {
      navigate('/');
    }else{
      { 
      message !== '' && setTimeout(()=>{
        navigate('/signup');
    },3000)
    }
    }
  }, []);





  const handleInputChange = (event: string, stateUpdater: React.Dispatch<React.SetStateAction<any>>) => {
    const value = event;
    stateUpdater(value);
    if (stateUpdater === setName) {
      // Perform validation for name
      setNameError(value.length < 5);
    }

    if (stateUpdater === setPhone) {
      // Perform validation for phone
      setPhoneError(value.length !== 10);
    }

    if (stateUpdater === setEmail) {
      // Perform validation for email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setError(!emailRegex.test(value));
    }
  };

  const userObj: IUser = {
    name: name,
    phone: phone,
    email: email,
  };

  const handleClick = () => {
    if (name !== '' || phone !== 0  && email !== '') {
      localStorage.setItem('user', JSON.stringify(userObj));
      alert('Form Submitted');
      navigate('/');
    } else {
      alert('Fill Valid Data');
    }
  };

  return (
    <Box sx={{ margin: 'auto' }} maxWidth={isMobile ? "80vw" : "40vw"}>
      <Typography variant="h5" component="h2" sx={{ textAlign: 'center', textTransform: 'uppercase', paddingTop: '30px' }}>
        Sign UP
      </Typography>

      
        <Typography variant='subtitle1' sx={{bgcolor:'#fab1a0'}}>
        {message}
      </Typography>
      
      
      <TextField
        id="outlined-basic-name"
        label="Name"
        variant="outlined"
        fullWidth
        margin="dense"
        onChange={(e) => handleInputChange(e.target.value, setName)}
        error={nameError}
        helperText={nameError ? 'Username must be at least 5 characters' : ''}
      />
      <TextField
        id="outlined-basic-phone"
        label="Phone Number"
        variant="outlined"
        fullWidth
        margin="dense"
        onChange={(e) => handleInputChange(e.target.value, setPhone)}
        error={phoneError}
        helperText={phoneError ? 'Mobile Number must be 10 digits' : ''}
      />
      <TextField
        id="outlined-basic-email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="dense"
        onChange={(e) => handleInputChange(e.target.value, setEmail)}
        error={error}
        helperText={error ? 'Invalid Email Address' : ''}
      />
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ marginTop: '10px' }}
        onClick={handleClick}
        disabled={error || nameError || phoneError}
      >
        Sign Up
      </Button>
     
    </Box>
  );
};

export default Signup;





