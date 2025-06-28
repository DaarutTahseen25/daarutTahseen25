

import React, { useState } from 'react'
import Logo from '../assets/logo.png' 
import {BsEyeSlash, BsEye} from 'react-icons/bs'
import { NavLink } from 'react-router';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-2'>
      {/* Left Side -  */}
      <div className='bg-[#fffbd3] min-h-[50vh] lg:min-h-screen relative flex flex-col items-center justify-center p-8'>
        <div className='flex flex-col items-center max-w-md'>
         
              <div className='relative mix-blend-multiply  object-cover w-full h-60 mb-4'>
             <img src={Logo} alt="Logo" className='h-60 ' />
             </div>
           <div className='font-sans text-[#684235] text-2xl md:text-3xl leading-none  text-center mt-4'>
          <h3 className='font-clash text-[40px] text-[#684235] text-xl   md:text-2xl leading-none font-bold text-center'>
            Welcome Back to <br /> DaaruTahseen
          </h3>
          <p className='mt-4 leading-[100%] font-weight:400 font-Bricolage font-[50px]  text-sm md:text-base text-center text-gray-800'>
            Sign In to Resume your Quranic Learning Journey as part <br /> of a devoted Learning community
          </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full  p-6 sm:p-10 md:p-12 lg:p-20 min-h-[50vh] lg:min-h-screen flex flex-col justify-center">
        <div className="mb-6 md:mb-8 text-center ">
          <h1 className="text-2xl   sm:text-3xl font-clash text-gray-900">
            Login to your Student <span> <br />Account</span>
          </h1>
        </div>

        <form className="space-y-4 max-w-md mx-auto w-full">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-10 mb-1">
              Email/NIN
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email or NIN"
              className="w-full  px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
           
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
  <div className="relative"> 
  <input
    id="password"
    name="password"
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    className="w-full px-4 py-2 outline-none md:py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#33aba0] focus:border-[#33aba0]  transition"
    required
  />
  <button 
    type="button"  
    onClick={() => setShowPassword(!showPassword)} 
    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 cursor-pointer"
  >
    {showPassword ? <BsEye className="h-5 w-5" /> : <BsEyeSlash className="h-5 w-5" />}
  </button>
</div>
          </div>

          <div className="text-sm text-right ">
            <NavLink to="/forgot-password" className="">
              Forgot password?
              </NavLink>
           
          </div> 

          <div>
            <button
              type="submit"
              className="w-full flex mt-10 justify-center py-2 md:py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#33aba0] hover:bg-[#33aba0]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <NavLink className="text-[#33aba0] hover:text-[#33aba0] font-medium" to="/signup">
            Signup
            </NavLink>
  
        </div>
      </div>
    </div>
  )
}

export default Login