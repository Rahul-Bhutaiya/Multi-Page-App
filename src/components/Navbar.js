import React from 'react';
import { Link } from 'react-router-dom';
import navIcon from '../assets/Logo.svg';
import toast from 'react-hot-toast';

const Navbar = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div className='flex items-center justify-between py-4 w-11/12 max-w-[1160px] mx-auto'>

        <Link to='/'>
            <img src={navIcon} alt='Product Icon' height='32' width='160' loading='lazy'/>
        </Link>

        <nav className='text-richblack-25 flex gap-x-6'>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
        </nav>

        <div className='md:flex items-center gap-x-4 hidden'>

            {   !isLoggedIn && 
                <Link to={'/login'}>
                    <button
                    className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    >Log in</button>
                </Link>
            }
            {   !isLoggedIn && 
                <Link to={'/signup'}>
                    <button
                    className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    >Sign up</button>
                </Link>
            }
            {   isLoggedIn && 
                <Link to={'/login'}
                    onClick={()=>{
                        toast.success('Logged Out');
                        setIsLoggedIn(false);
                    }}>
                    <button
                    className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    >Log out</button>
                </Link>
            }
            {   isLoggedIn && 
                <Link to={'/dashboard'}>
                    <button
                    className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    >Dashboard</button>
                </Link>
            }

        </div>

    </div>
  )
}

export default Navbar