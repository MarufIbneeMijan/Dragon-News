import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContex } from "../../Provider/AuthProvider";

const Login = () => {
  const [errorCode,setErrorCode]= useState("")
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate()
  const {logIn}= useContext(authContex)
  const handleLogin =(event)=>{
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    logIn(email,password)
    .then(()=>{
        navigate(location?.state? location.state:"/" )
    })
    .catch((error) => {
     
      const errorMessage = error.message;
      setErrorCode(errorMessage)
    });
  }
    
  
  
  
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="ml-5 text-xl text-red-700" >{errorCode}</p>
          <p className="ml-5">
            Already Have A Account?{" "}
            <Link className="text-red-500" to={"/auth/reg"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
