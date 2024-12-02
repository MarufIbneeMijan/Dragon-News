import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header';
import RightNav from './RightNav';

const NewsDetails = () => {
    const data = useLoaderData()
    const {image_url,details,title} =data.data[0]
    
    return (
       <div>
           <header>
            <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12' >
            <div className='col-span-9' >
            <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image_url}
     
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <div className="card-actions">
      <Link to={"/"} >Back To Home</Link>
    </div>
  </div>
</div>
            </div>
            <aside className='col-span-3'>
                <RightNav></RightNav>
            </aside>
           </main>
       </div> 
        
      
    )
};

export default NewsDetails;