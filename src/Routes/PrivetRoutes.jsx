import React, { useContext } from 'react';
import { authContex } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const path = useLocation()
    console.log(path)
    const {user,loading}= useContext(authContex)
    if(loading){
        return <div>Wait A minu</div>
    }
    
    if(user){
        return children
    }
        return <Navigate state={path.pathname} to={"/auth/login"} ></Navigate>
    
    
    
   
};

export default PrivetRoutes;