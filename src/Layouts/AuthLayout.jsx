import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav';

const AuthLayout = () => {
    return (
        <div className='bg-base-200' >
            <div className='w-11/12 mx-auto '>
                <Nav></Nav>
            </div>
            <div>
            <Outlet></Outlet>
            </div>
          
        </div>
    );
};

export default AuthLayout;