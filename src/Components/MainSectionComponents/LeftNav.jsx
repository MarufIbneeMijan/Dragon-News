import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
   const [categories,setCategories]=useState([])
   useEffect(()=>{
   fetch("https://openapi.programming-hero.com/api/news/categories")
   .then(res=>res.json())
   .then(data=>setCategories(data.data.news_category))
   },[])
 
    return (
        <div className='space-y-3' >
            <div>
                <h3 className='font-semibold' >All Category ({categories.length})</h3>
            </div>
            <div className='flex flex-col items-center space-y-3' >
            {
                categories.map(category=> <NavLink to={`categorise/${category.category_id}`} ><button className='py-2 btn btn-ghost border border-sky-950' key={category.category_id}>{category.category_name}</button></NavLink>
                 )
            }
            </div>
        </div>
    );
};

export default LeftNav;