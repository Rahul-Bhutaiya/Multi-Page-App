import React from 'react'
import Template from '../components/Template'
import loginImage from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
        title='Welcome Back'
        formtype='login'
        imageName={loginImage}
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login