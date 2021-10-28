import React from 'react';

import "./TokenIOBox.css"

import eth_icon from "../../eth.png"

export default function TokenIOBox(props) {

    return (
        <div className="token-io-box">
            <div className="token-io-box-icon-area">
                <img className="token-io-box-icon" src={eth_icon} alt="img1" />
            </div>
            <div className="token-io-box-name">
                {props.name}
            </div> 
            <div className="token-io-box-input-output-area">
                <div className="token-io-box-input-output-max-button-area">
                    <span> (max) </span>
                </div> 
                <input className="token-io-box-input-output-field" value={0.000}/>
            </div>
        </div>
    );
}