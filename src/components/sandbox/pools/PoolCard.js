import React, { useMemo, useState, useEffect } from "react";

import './PoolCard.css'
import PopUpBox from "../dashboard/PopUpBox";


function makeDataRow(title, datapoint) {
    return (
        <>
            <div className='data-row'>
                <label className='data-title'>{title}</label>
                <label>:</label>
                <label className='data-point'>{datapoint}</label>
            </div>
        </>
    )
}



function PoolCard(props) {

    const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    const togglePopup = () => {
      setIsPopUpVisible(!isPopUpVisible);
    }
    
    return (
        <>
            {isPopUpVisible && <PopUpBox cardData={props.data} onClose={togglePopup} />}
            <div className='card-area'>
                <button className='card-border' onClick={togglePopup}>
                    <div className='card-header'>
                        <img className='token-icon-2' src={props.data.iconTokenB} alt="img1" />
                        <img className='token-icon-1' src={props.data.iconTokenA} alt="img2" />
                    </div>
                    <div className='card-title'>
                        {props.data.tokenA}
                        /
                        {props.data.tokenB} 
                    </div>
                    <div className='card-body'>
                        <div className='data-column'>
                            {
                                props.data.attributes.map((item) =>
                                    makeDataRow(item.title, item.point)
                                )
                            }
                        </div>
                    </div>
                </button>
            </div>
        </>
    )
}

export default PoolCard
