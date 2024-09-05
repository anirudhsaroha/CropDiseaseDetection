import React, { useContext } from 'react'
import FAQ from '../components /FAQ'
import Footer from '../components /Footer'
import farmer from '../navigations/vecteezy_adaptable-and-versatile-3d-farmer-women-flexible-and_22483471.png'
import PhotoUpload from '../components /PhotoUpload'
import Header from '../components /Header'
import CustomerSupport from '../components /CustomerSupport'
import HorizontalScrollCard from '../components /HorizontalScrollCard'
import { LanguageContext } from '../navigations/LanguageContext'


const HomePage = () => {
  // State to toggle between English and Hindi
  const { language, setLanguage } = useContext(LanguageContext);

  // Function to switch between languages
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'english' ? 'hindi' : 'english'));
  };

  // Text content based on the language
  const content = {
    english: {
      heading: "GETTING STARTED!",
      description: `Agro Scan is designed to help farmers diagnose and treat crop issues quickly and efficiently. With Agro Scan, you can easily identify problems affecting your crops, get expert advice on how to solve them, and improve your farm's productivity.

      Our goal is to empower you with the knowledge and tools to enhance your agricultural experience. Whether you're facing pests, diseases, or nutrient deficiencies, Agro Scan is here to support you every step of the way.

      By using Agro Scan, you'll be able to achieve your farming goals and grow healthier, more productive crops.`,
    },
    hindi: {
      heading: "शुरुआत करें!",
      description: `एग्रो स्कैन किसानों को फसलों की समस्याओं का निदान और उपचार करने में तेजी से मदद करने के लिए डिज़ाइन किया गया है। एग्रो स्कैन के साथ, आप आसानी से अपनी फसलों को प्रभावित करने वाली समस्याओं की पहचान कर सकते हैं, उन्हें हल करने के लिए विशेषज्ञ सलाह प्राप्त कर सकते हैं और अपने खेत की उत्पादकता में सुधार कर सकते हैं।

      हमारा लक्ष्य आपको कृषि के अनुभव को बेहतर बनाने के लिए ज्ञान और उपकरण प्रदान करना है। चाहे आप कीटों, बीमारियों या पोषक तत्वों की कमी का सामना कर रहे हों, एग्रो स्कैन हर कदम पर आपका समर्थन करेगा।

      एग्रो स्कैन का उपयोग करके, आप अपने कृषि लक्ष्यों को प्राप्त कर सकते हैं और स्वस्थ, अधिक उत्पादक फसलें उगा सकते हैं।`,
    },
  };

  return (
    <div
      className="min-h-screen w-full pt-10 md:pt-20 text-[#000000]"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Header/>
      <div className="flex flex-col mt-10">
        <div className="pl-10 pr-10 lg:pl-16 mb-7 lg:pr-16">
          <h1 className="text-4xl text-center lg:text-start md:text-6xl lg:text-6xl font-black font-cursive">
            {content[language].heading}
          </h1>
          <div className="flex-col lg:flex lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 lg:h-[25rem] h-[20rem] flex flex-col mb-20">
              <div className="pt-4 lg:pt-16">
                <p className="text-sm md:text-base text-justify">
                  {content[language].description}
                </p>
              </div>
              <div className="mt-auto text-center">
                <PhotoUpload />
              </div>
            </div>
            <div className="text-center mb-10 lg:absolute  lg:top-20 lg:right-5">
          <button
            onClick={toggleLanguage}
            className="neuomorphic"
          >
            {language === 'english' ? 'हिंदी में बदलें' : 'Switch to English'}
          </button>
        </div>
            <div className="flex justify-center items-center">
              <img
                src={farmer}
                className="lg:h-[36rem] md:h-[30rem] h-[28rem]"
                alt="Farmer"
              />
            </div>
          </div>
        </div>
      </div>
      <HorizontalScrollCard  />
      <FAQ language={language} />
      <CustomerSupport language={language} />
      <Footer  />
    </div>
  );
};

export default HomePage;