import React from 'react'
import { navigation } from '../navigations/navigation'
import { Link } from 'react-router-dom'
import user from '../navigations/user.png'
import { LanguageContext } from '../navigations/LanguageContext'
import { useContext } from 'react'


const Header = () => {

  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div className="flex items-center justify-between p-2 backdrop-blur-3xl backdrop-brightness-105 z-50 border-[#000000] fixed top-0 w-full">
        <div className="flex items-center">
          <Link
            to="/home"
            className="font-black lg:text-2xl text-lg flex justify-center items-center rounded-full text-[#000000] mr-2"
          >
            { language === 'hindi' ? 'एग्रो स्कैन' : 'AGRO SCAN'}
          </Link>
          <div className="flex justify-evenly">
            {navigation.map((nav, index) => {
              return (
                <div key={index} className="font-semibold text-sm md:text-xl hover:scale-110 lg:text-xl mr-2">
                  <Link to={`/${nav.href}`}>{ language === 'hindi' ? nav.labelHindi : nav.label}</Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <img src={user} className="lg:h-14 rounded-full lg:w-14 h-8 w-8" alt="User" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;