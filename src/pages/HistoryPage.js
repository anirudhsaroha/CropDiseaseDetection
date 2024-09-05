import React from 'react'
import Header from '../components /Header'
import Footer from '../components /Footer'
import { history } from '../navigations/navigation'
import { useNavigate } from 'react-router-dom'


const HistoryPage = () => {

  const navigate = useNavigate(); 

  const handleCLick = () => {
      navigate('/details');
  }

  return (
    <div className='h-full w-full pt-[4.5rem]' style={{
      backgroundImage: 'url(https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}   > 
    <Header/>
    <div className='w-full min-h-[70rem]' >
    {
      history.map( (h, index) => {
        return <div style={{
          backgroundImage: `url(${h.img})` ,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }} className='w-full h-72 rounded-3xl border border-white flex justify-center items-center text-4xl font-black'>
          <div className=' rounded-3xl h-full w-full bg-gray-600 flex justify-center items-center bg-opacity-0 hover:text-white hover:bg-opacity-75' onClick={handleCLick}  >
                {h.date}
              </div>
        </div>
      } )
    }
    </div>
    <Footer/>
    </div>
  )
}

export default HistoryPage
