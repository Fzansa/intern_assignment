import React, { useEffect } from 'react';
import { IUser } from './Signup';
import { useNavigate } from 'react-router-dom';

interface ProtectedProps {
  Components: React.ComponentType<any>;
}

const Protected: React.FC<ProtectedProps> = ({ Components }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // const login: IUser = JSON.parse(localStorage.getItem('user'));
    const login: IUser | null = JSON.parse(localStorage.getItem('user') || 'null');
    if (!login) {
      navigate('/signup?msg=You must enter your details before accessing the page');
    }

  
  }, []);

  return <Components />;
};

export default Protected;
