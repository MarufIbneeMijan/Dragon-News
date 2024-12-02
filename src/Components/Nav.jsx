import React, { useContext } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { authContex } from '../Provider/AuthProvider';

const Nav = () => {
    const {user,singOutUser}=useContext(authContex)
    const handleLogOut=()=>{
       
        singOutUser()
       
        .then(()=>{
           
        })
        .catch((error) => {
           console.log(error)
          });
          
    }    
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center py-4' >
            <div></div>
            <div className='flex gap-3'>
               <NavLink to={"/"}>Home</NavLink>
               <NavLink to={"about"}>About</NavLink>
               <NavLink to={"career"}>Career</NavLink>
              <p>{user && user.email}</p>
            </div>
            <div>
              
               
               {
                user ? <button onClick={handleLogOut} >Logout</button>: <Link to={"/auth/login"} className='flex items-center gap-2 btn btn-ghost'><FaUserAlt />Login</Link>
               }
            </div>
        </div>
    );
};

export default Nav;