import React from 'react'
import Header from '../components /Header'
import Footer from '../components /Footer'
import { names } from '../navigations/navigation'
import { useNavigate } from 'react-router-dom'
import { useState , useContext } from 'react'
import { LanguageContext } from '../navigations/LanguageContext'

const ListPage = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/crops/${index}`);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'hindi' : 'english');
  };

  return (
    <div
      className='min-h-screen w-screen pt-[4.5rem]'
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <div>
        {names.map((name, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${name.href})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className='h-64 w-full flex items-center font-black justify-center text-7xl text-black capitalize border-b border-white'
          >
            <div
              className='h-full w-full bg-gray-600 flex justify-center items-center bg-opacity-0 hover:text-white hover:bg-opacity-75'
              onClick={() => handleClick(index)}
            >
              {language === 'english' ? name.name : name.nameHindi}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ListPage;