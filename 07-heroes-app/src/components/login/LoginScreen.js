import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from './../../types/types';

export const LoginScreen = ({history}) => {
  
  const { user, dispatch }  = useContext(AuthContext)
  // history.push('/'); => te lleva a la ruta especificada
  // history.replace('/'); => te lleva a la ruta especificada eliminando de la historia la ruta anterior
  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    dispatch({ type: types.login, payload: { name: 'Nahuel' } });
    history.replace(lastPath);
    
  }

  
  return (
    <div className="container mt-5">
      <h1> Login </h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}> 
        Login 
      </button>
    </div>
  );
}
