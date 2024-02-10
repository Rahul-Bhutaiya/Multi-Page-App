import React from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const SsignupForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();

    const [formData,setFormData]=useState({
        userType:'Student',
        firstName:'',
        lastName:'',
        email:'',
        createPassword:'',
        confirmPassword:''
    });

    const [isCreatePasswordVisible,setIsCreatePasswordVisible]=useState(false);
    const [isConfirmPasswordVisible,setIsConfirmPasswordVisible]=useState(false);

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
        if(formData.createPassword!==formData.confirmPassword){
            toast.error('Passwords Do Not Match');
        }
        else{
            console.log(formData);
            toast.success('Account Created');
            setIsLoggedIn(true);
            navigate('/dashboard');
        }
    }

  return (
    <form onSubmit={submitHandler}
        className='w-full flex flex-col gap-y-4'>

        <div id='userType' className='flex bg-richblack-800 py-3 px-1 gap-x-1 my-6 rounded-full max-w-max '>

            <label>
                <input
                    required
                    type='radio'
                    name='userType'
                    value='Student'
                    checked={formData.userType==='Student'}
                    onChange={changeHandler}
                />
            </label>
            <label>
                <input
                    required
                    type='radio'
                    name='userType'
                    value='Instructor'
                    checked={formData.userType==='Instructor'}
                    onChange={changeHandler}
                />
            </label>

        </div>

        <div className='flex gap-x-4'>

            <label>
                <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>First Name 
                    <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type='text'
                    placeholder='Enter first name'
                    name='firstName'
                    value={formData.firstName}
                    onChange={changeHandler}
                    className='w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5'
                />
            </label>
            <label>
                <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>Last Name 
                    <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type='text'
                    placeholder='Enter last name'
                    name='lastName'
                    value={formData.lastName}
                    onChange={changeHandler}
                    className='w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5'
                />
            </label>

        </div>

        <label className='w-full'>
            <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>Email Address 
                <sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type='email'
                placeholder='Enter email address'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                className='w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5'
            />
        </label>

        <div className='flex gap-x-4'>

            <label className='relative'>
                <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>Create Password 
                    <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type={isCreatePasswordVisible?'text':'password'}
                    name='createPassword'
                    value={formData.createPassword}
                    placeholder='Enter Password'
                    onChange={changeHandler}
                    className='w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5'
                />
                <span 
                    className='absolute right-3 top-[38px] z-[10] cursor-pointer'
                    onClick={()=>{
                        setIsCreatePasswordVisible(!isCreatePasswordVisible);
                    }}>
                    {isCreatePasswordVisible?(<AiOutlineEyeInvisible fontSize='1.5rem' fill='white'/>):(<AiOutlineEye fontSize='1.5rem' fill='white'/>)}
                </span>
            </label>

            <label className='relative'>
                <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>Confirm Password 
                    <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type={isConfirmPasswordVisible?'text':'password'}
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    placeholder='Confirm Password'
                    onChange={changeHandler}
                    className='w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5'
                />
                <span 
                    className='absolute right-3 top-[38px] z-[10] cursor-pointer'
                    onClick={()=>{
                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
                    }}>
                    {isConfirmPasswordVisible?(<AiOutlineEyeInvisible fontSize='1.5rem' fill='white'/>):(<AiOutlineEye fontSize='1.5rem' fill='white'/>)}
                </span>
            </label>

        </div>

        <button 
        className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900'>
            Create Account
        </button>

    </form>
  )
}

export default SsignupForm