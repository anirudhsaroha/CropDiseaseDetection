import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../navigations/LanguageContext'
import { useContext } from 'react';


const PhotoUpload = () => {
  const { language } = useContext(LanguageContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      navigate('/details', { state: { image: URL.createObjectURL(file) } });
    }
  };

  const handleButtonClick = () => {
    document.getElementById('file-upload').click();
  };

  return (
    <div className="photo-upload-container hover:scale-105">
      <input 
        type="file" 
        accept="image/*" 
        id="file-upload" 
        className="hidden" 
        onChange={handleFileChange} 
      />
      <button 
        onClick={handleButtonClick} 
        className="bg-[#000000] text-white px-4 py-2 rounded-lg border border-black outline-none hover:bg-[#424242] w-full h-28 text-3xl mb-4"
      >
        { language == 'hindi' ? 'फोटो अपलोड करें' : 'Upload Photo'}
      </button>
    </div>
  );
};

export default PhotoUpload;