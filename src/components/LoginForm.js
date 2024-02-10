import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();

    const [formData,setFormData]=useState({
        email:'',
        password:''
    });

    const [isPwdVisible,setIsPwdVisible]=useState(false);

    function changeHandler(event){
        setFormData((prevObj)=>{
            return{
                ...prevObj,
                [event.target.name]:event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        console.log(formData);
        toast.success('Logged In');
        setIsLoggedIn(true);
        navigate('/dashboard');
    }

  return (
    <form onSubmit={submitHandler} className='w-full flex flex-col gap-y-4 mt-6'>

        <label className='w-full'>
            <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>Email Address 
                <sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type='text'
                placeholder='Enter email address'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full'
                
            />
        </label>

        <label className='relative'>
            <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>Password 
                <sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type={isPwdVisible?('text'):('password')}
                placeholder='Enter Password'
                name='password'
                value={formData.password}
                onChange={changeHandler}
                className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full'
                
            />
            <span
                className='absolute right-3 top-[38px] z-[10] cursor-pointer' 
                onClick={()=>{setIsPwdVisible(!isPwdVisible)}}>
                {isPwdVisible?(<AiOutlineEyeInvisible fontSize='1.5rem' fill='white'/>):(<AiOutlineEye fontSize='1.5rem' fill='white'/>)}
            </span>

            <Link to='#'>
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
            </Link>
        </label>

        <button className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900'>Sign In</button>

    </form>
  )
}

export default LoginForm