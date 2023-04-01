import React, {useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {useNavigate} from "react-router-dom";

export interface IAuthenticatedProps {
  children: React.ReactNode;
}

const Authenticated: React.FC<IAuthenticatedProps> = (props) => {
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { children } = props;
  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(false);
      } else {
        navigate('/login');
      }

      if(isAuthenticated) {
        return <><p>Loading...</p></>;
      }
    });
  }
  return <>{children}</>;
};

export default Authenticated;
