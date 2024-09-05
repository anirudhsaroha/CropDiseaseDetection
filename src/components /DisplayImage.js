import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import crop from '../navigations/leaf-curl-toms-900x500.jpg'

const DisplayImage = () => {
  const location = useLocation();
  const image = crop ;

  return (
      <div className="display-image-container text-center my-5">
        {crop ? (
          <img
            src={crop}
            alt="Uploaded"
            className="w-full h-auto mx-auto"
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <p>No image selected. Please go back and upload an image.</p>
        )}
      </div>
    );
  
};

export default DisplayImage;
