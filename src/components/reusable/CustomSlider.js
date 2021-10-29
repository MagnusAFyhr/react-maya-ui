import React, { useState } from 'react';

import "./CustomSlider.css"
import Slider from './Slider';

const CustomSlider = (props) => {

  const [value, setValue] = useState(0);

  const maxValue = 1000;

  const setValueToMax = () => {
    setValue(maxValue);
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  }

  const hnadleAfterChange = () => {
    var min = 1;
    var max = 1000;
    var rand =  min + (Math.random() * (max-min));


  }

  const handleInput = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value <= maxValue) {
      setValue(value)
    }
  }

  return (
    <>
      <div className="custom-slider-area"> 
        <div className="custom-slider-header-area">
            <div className="custom-slider-title">
              {props.title}
              <div className="custom-slider-max-button-area" onClick={setValueToMax}>
                (max)
              </div>
            </div> 
            <input className="custom-slider-input" value={value} onChange={handleInput}/>
        </div>
        <Slider onChange={handleChange} onAfterChange={hnadleAfterChange} value={value} maxValue={maxValue} />
      </div>
    </>
  );
};

export default CustomSlider;