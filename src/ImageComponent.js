import React from 'react';
import './ImageComponent.css';

const ImageComponent = () => {
  return (
    <div className="image-container">
      <img src="/Images/first.png" alt="Super App Image" />
      <div className="image-text">Discover new things on SuperApp</div>
    </div>
  );
};

export default ImageComponent;
