import React from 'react'
import Waves from '../components /Waves'
import '../styles/layout.css'
import Register from '../components /Register'
import Login from '../components /Login'
import { useState } from 'react'

const IntroPage = () => {

  const [ register , setRegister ] = useState(false); 

  const display = register ? <Register register={register} setRegister={setRegister} /> : <Login register={register} setRegister={setRegister} /> ;

  return (
    <div
  className="h-screen w-screen overflow-hidden"
  style={{
    backgroundImage: 'url(https://images.pexels.com/photos/276245/pexels-photo-276245.jpeg?auto=compress&cs=tinysrgb&w=1200)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>
      <div className=' h-full w-full flex  justify-center items-center '>
        {display}
      </div>
    </div>
  )
}

export default IntroPage
