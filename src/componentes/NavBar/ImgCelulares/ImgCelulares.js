import React from 'react';
import './ImgCelulares.css'
import IPHONE_11 from './imagen3/IPHONE_11.jpg';
import iphone_12 from './imagen3/iphone_12.jpg';
import iphone_13 from './imagen3/iphone_13.jpg';
import iphone14 from './imagen3/iphone14.jpg';


const ImgCelulares = () => {
    return (
      <div className="img-container">
        <div className="card">
          <img src={IPHONE_11} alt="iphone11" className="card-img" />
        </div>
        <div className="card">
          <img src={iphone_12} alt="iphone12" className="card-img" />
        </div>
        <div className="card">
          <img src={iphone_13} alt="iphone13" className="card-img" />
        </div>
        <div className="card">
          <img src={iphone14} alt="iphone14" className="card-img" />
        </div>
      </div>
    );
  };
  
  export default ImgCelulares;