import React from 'react';
import { FcGoogle } from "react-icons/fc";
import LoginForm from './LoginForm';
import SsignupForm from './SsignupForm';
import backgroundImage from '../assets/frame.png'

const Template = ({title,formtype,imageName,setIsLoggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 flex-col-reverse gap-y-12 md:gap-y-0 md:gap-x-12 md:flex-row'>

        {/* left-side */}
        <div className='w-11/12 max-w-[450px] mx-auto md:mx-0'>

            <h2 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h2>

            <h3 className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <p className='text-richblack-100'>Build skills for today, tomorrow, and beyond.</p>
                <p className='text-blue-100 italic'>Education to future-proof your career.</p>
            </h3>

            {/* form-container */}
            <div>
                {
                    formtype==='login'?(<LoginForm setIsLoggedIn={setIsLoggedIn}/>):(<SsignupForm setIsLoggedIn={setIsLoggedIn}/>)
                }
            </div>

            <div className='w-full flex items-center gap-x-2 my-4'>
                <div className='flex-1 h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium text-[0.875rem] leading-[1.375rem]'>OR</p>
                <div className='flex-1 h-[1px] bg-richblack-700'></div>
            </div>

            <button 
            className='w-full flex justify-center items-center gap-x-2 py-[8px] px-[12px]
                     rounded-[8px] mt-6 font-medium text-richblack-100 border border-richblack-700'>
                <FcGoogle/><span>Sign in with Google</span>
            </button>

        </div>

        <div className='relative w-11/12 max-w-[450px] mx-auto md:mx-0'>

                <img src={backgroundImage} alt='background' height='504' width='558' loading='lazy'/>
                <img src={imageName} alt='foreground' height='504' width='558' loading='lazy' 
                    className='absolute z-10 -top-4 right-4'
                />

        </div>

    </div>
  )
}

export default Template;