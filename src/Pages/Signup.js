import React from 'react';
import signupImage from '../assets/signup.png';
import Template from '../components/Template';


const Signup = ({setIsLoggedIn}) => {
    return(
    <Template
        title='Join the millions learning to code with StudyNotion for free'
        formtype='signup'
        imageName={signupImage}
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Signup