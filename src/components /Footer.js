import React from 'react';
import { LanguageContext } from '../navigations/LanguageContext'
import { useContext } from 'react';


const Footer = () => {

  const { language } = useContext(LanguageContext);

  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">
              { language === 'hindi' ? 'एग्रो स्कैन' : 'AGRO SCAN'}
            </h3>
            <p>&copy; {new Date().getFullYear()} { language === 'hindi' ? 'एग्रो स्कैन' : 'AGRO SCAN'} {language === 'hindi' ? 'सर्वाधिकार सुरक्षित' : 'All rights reserved.'}</p>
          </div>
          <div className="flex space-x-4 items-center justify-between">
            <a href="#" className="hover:underline">{ language === 'hindi' ? 'गोपनीयता नीति' : 'Privacy Policy'}</a>
            <a href="#" className="hover:underline">{ language === 'hindi' ? 'सेवा की शर्तें' : 'Terms of Service'}</a>
            <a href="#" className="hover:underline">{ language === 'hindi' ? 'संपर्क करें' : 'Contact Us'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;