import React, { useRef } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { names } from '../navigations/navigation'
import { Link } from 'react-router-dom';
import { LanguageContext } from '../navigations/LanguageContext'
import { useContext } from 'react';

const HorizontalScrollCard = () => {
  const { language } = useContext(LanguageContext);
    const containerRef = useRef();
  
    const handleNext = () => {
      containerRef.current.scrollLeft += 300;
    };
  
    const handlePrevious = () => {
      containerRef.current.scrollLeft -= 300;
    };
  
    return (
      <div className="container px-3 mx-auto my-10 z-0">
        <div className='relative group overflow-hidden'>
          <div ref={containerRef} className='h-96 grid grid-cols-[repeat(auto-fit,230px)] pl-5 grid-flow-col items-center gap-10 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrollbar-none'>
            {names.map((data, index) => (
              <Link to='/crops/index' key={index}>
                <div className='flex flex-col justify-center items-center h-52 w-52 bg-white z-0 rounded-3xl shadow-2xl shadow-black hover:scale-110 ease-linear'>
                  <div
                    className='h-full w-full rounded-t-3xl'
                    style={{
                      backgroundImage: `url(${data.href}`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <p className='text-xl font-semibold capitalize'>
                    { language === 'hindi' ? data.nameHindi : data.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
  
          <div className='absolute top-0 w-full h-full hidden items-center justify-between px-4 lg:group-hover:flex'>
            <button
              onClick={handlePrevious}
              className='rounded-full z-10 drop-shadow-xl backdrop-blur-3xl bg-black/25 text-white font-bold text-3xl hover:scale-125 transition-all'
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={handleNext}
              className='rounded-full text-3xl z-10 backdrop-blur-3xl bg-black/25 text-white font-black hover:scale-125 transition-all'
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HorizontalScrollCard;