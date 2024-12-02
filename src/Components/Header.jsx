import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';
const Header = () => {
  const [date,setDate]= useState("")
    useEffect(()=>{
        const getDate = new Date()
        const dateFormat = format(getDate,"EEEE,MMMM dd ,yyyy")
        setDate(dateFormat)
    },[])
  
  
  return (
        <div className='flex flex-col justify-center items-center gap-3' >
           <div className='py-2'>
                <img src={logo} alt="" />
           </div>
           <div className='text-gray-500' >
            <h3>Journalism Without Fear or Favour</h3>
           </div>
           <div  className='text-xl'>
            {date}
            </div>
        </div>
    );
};

export default Header;