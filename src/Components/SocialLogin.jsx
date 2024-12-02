import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';

const SocialLogin = () => {
    return (
        <div>
           <div>
           <h3>Login With</h3>
           </div>
            <div className='*:w-full space-y-3 mt-2' >
                <button className='flex gap-2 items-center btn btn-ghost ' > <FaGoogle></FaGoogle> Login With Google </button>
                <button className='flex gap-2 items-center btn btn-ghost ' > <FaFacebookF></FaFacebookF> Login With Google </button>
            </div>
        </div>
    );
};

export default SocialLogin;