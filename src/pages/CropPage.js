import React from 'react'
import Header from '../components /Header'
import Footer from '../components /Footer'
import { diseases } from '../navigations/navigation'
import { useState, useContext} from 'react'
import { LanguageContext } from '../navigations/LanguageContext'


const CropPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleDetails = (index) => {
    setActiveIndex(index);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'hindi' : 'english');
  };

  return (
    <div
      className='min-h-screen w-full pt-[4.5rem]'
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <div className='w-full text-center mt-8 bg-white mb-5'>
        <ul className="list-none flex justify-evenly items-center">
          {diseases.map((d, index) => (
            <li 
              key={index} 
              className={`cursor-pointer text-base md:text-2xl hover:scale-110 font-semibold my-2 capitalize ${activeIndex === index ? 'text-red-600 lg:text-2xl scale-110' : ''}`} 
              onClick={() => toggleDetails(index)}
            >
              {language === 'english' ? d.name : d.nameHindi}
            </li>
          ))}
        </ul>
      </div>

      <div className='min-h-[45rem]'>
        <div className='w-full min-h-screen px-6 md:px-10 lg:px-28 flex justify-center items-center pt-2 pb-2'>
          <div className='w-full pl-8 pr-8 bg-white bg-opacity-90 rounded-3xl shadow-xl pt-8'>
            {activeIndex !== null && (
              <div>
                <div className="display-image-container text-center">
                  <img src={diseases[activeIndex].img} alt="Disease Image" className="w-full h-auto mx-auto" style={{ objectFit: 'contain' }} />
                  <div className="mt-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-green-400 inline-block">
                      {language === 'english' ? 'DISEASE' : 'रोग'}
                    </h2>
                    <p className="md:text-lg text-red-600 font-bold leading-relaxed mb-8 capitalize lg:text-4xl">
                      {language === 'english' ? diseases[activeIndex].name : diseases[activeIndex].nameHindi}
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                      {language === 'english' ? diseases[activeIndex].description : diseases[activeIndex].descriptionHindi}
                    </p>
                  </div>
                  <div className="mt-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-yellow-400 inline-block">
                      {language === 'english' ? 'SYMPTOMS' : 'लक्षण'}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                      {language === 'english' ? diseases[activeIndex].symptoms : diseases[activeIndex].symptomsHindi}
                    </p>
                  </div>
                  <div className="mt-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-red-400 inline-block">
                      {language === 'english' ? 'IMPACT' : 'प्रभाव'}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                      {language === 'english' ? diseases[activeIndex].impact : diseases[activeIndex].impactHindi}
                    </p>
                  </div>
                  <div className="mt-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-blue-400 inline-block">
                      {language === 'english' ? 'Management and Control' : 'प्रबंधन और नियंत्रण'}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {language === 'english' ? `Managing ${diseases[activeIndex].name} disease involves a combination of strategies:` : `(${diseases[activeIndex].nameHindi}) रोग का प्रबंधन विभिन्न रणनीतियों के संयोजन को शामिल करता है:`}
                    </p>
                    <p>
                      {language === 'english' ? diseases[activeIndex].manage : diseases[activeIndex].manageHindi}
                    </p>
                  </div>
                </div>
                <div className='flex justify-center items-center mb-3' >
          <button
            onClick={toggleLanguage}
            className="neuomorphic"
          >
            {language === 'english' ? 'हिंदी में बदलें' : 'Switch to English'}
          </button>
          </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CropPage;