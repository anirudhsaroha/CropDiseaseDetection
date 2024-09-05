import React from 'react'
import Header from '../components /Header'
import '../styles/layout.css'

const SigninPage = () => {
  return  (
    <div className='h-screen w-screen  bg-gray-600 pt-20'>
      <Header />
      {/* bg-gradient-to-r from-[#a1ffce] to-[#faffd1] */}
      <div className='h-full w-full flex justify-center items-center' >
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default SigninPage
