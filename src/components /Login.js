import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/layout.css"

const Login = ({register , setRegister }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        setRegister( !register );
    }

    const handleSubmit = () => { 
        navigate("/home"); 
      };

  return (
    <div className='p-5 backdrop-blur-md border border-gray-300 rounded-lg  md:w-[30rem] w-[25rem]' >
    <div className="text-center flex flex-col items-center justify-around w-full">
        <h2 className='text-white text-4xl font-black' >LOGIN</h2>
        <form className='bg-transparent border-none' action="/home">
            <p className='border border-white rounded-3xl' >
                <input className='w-96 h-14 bg-transparent p-2 text-white placeholder-white' type="text" name="first_name" required placeholder='Username' />
            </p>
            <p className='border border-white rounded-3xl ' >
                <input className='w-96 h-14 bg-transparent p-2 placeholder-white'  type="password" name="password" required  placeholder='Password'/>
            </p>
            <p className='text-gray-200 w-full flex justify-between items-center' >
                <p className='flex justify-start items-center text-sm' ><input type="checkbox" name="checkbox" id="checkbox" required /> <span>Remember me </span></p>
                <p className='text-sm' >Forgot Password?</p>
            </p>
            <p className='border border-white rounded-3xl w-96 h-14 cursor-pointer bg-white text-black flex justify-center items-center text-3xl' onClick={handleSubmit} >
                < div >Login</ div>
        </p>
        </form>
            <p className='text-md w-full text-gray-300  hover:text-white' >First time? <p className='  font-semibold inline-block cursor-pointer' onClick={handleClick} >Create an account</p></p>
    </div>
    </div>
)
}

export default Login
