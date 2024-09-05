import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import "../styles/layout.css"

const Register = ({ register , setRegister }) => {

    const handleClick = () => {
        setRegister( !register );
    }

    const navigate = useNavigate();

    const handleSubmit = () => { 
        navigate("/home"); 
      };

  return (
    <div className='p-5 backdrop-blur-md border border-white rounded-lg md:w-[30rem] w-[25rem]'>
        <div className="text-center flex flex-col items-center justify-around w-full">
        <h2 className='text-white text-4xl font-black' >Register</h2>
        <form className='bg-transparent border-none' action="/home">
            <p className='border border-white rounded-3xl' >
                <input className='w-96 h-14 bg-transparent p-2 text-white placeholder-white' type="text" name="first_name" required  placeholder='Username'/>
            </p>
            <p className='border border-white rounded-3xl' >
                <input className='w-96 h-14 bg-transparent p-2 text-white placeholder-white ' type="email" name="email" required placeholder='Email-address' />
            </p>
            <p className='border border-white rounded-3xl' >
                <input className='w-96 h-14 bg-transparent p-2 text-white placeholder-white' placeholder='Password' type="password" name="password" requiredc />
            </p>
            <p className='text-gray-200' >
                <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
            </p>
            <p className='border border-white rounded-3xl w-96 h-14 cursor-pointer bg-white text-black flex justify-center items-center text-3xl' onClick={handleSubmit} >
                < div >Register</ div>
        </p>
        </form>
        <p className='text-md w-full text-gray-300  hover:text-white' >Already have a account? <p className='  font-semibold inline-block cursor-pointer' onClick={handleClick} >Login to existing account</p></p>
    </div>
    </div>
)
}

export default Register
