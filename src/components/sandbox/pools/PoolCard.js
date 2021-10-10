import React from "react";

import './PoolCard.css'


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
      
    return (
        <>
            <div className='card-area'>
                <button className='card-border'>
                    <div className='card-header'>
                        <img className='token-icon-2' src={props.data.iconTokenB} alt="img2" />
                        <img className='token-icon-1' src={props.data.iconTokenA} alt="img1" />
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
