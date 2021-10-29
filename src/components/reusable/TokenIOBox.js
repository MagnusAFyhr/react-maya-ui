import React from 'react';

import "./TokenIOBox.css"

import eth_icon from "../../eth.png"

export default function TokenIOBox(props) {

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        props.setValue(value);
    };

    return (
        <div className="token-io-box">
            <div className="token-io-box-icon-area">
                <img className="token-io-box-icon" src={eth_icon} alt="img1" />
            </div>
            <div className="token-io-box-name-area">
                <div className="token-io-box-name">
                    {props.name}
                </div>
                {props.isDeposit && <div className="token-io-box-max-button-area">
                    (max)
                </div>}
            </div> 
            <div className="token-io-box-input-output-area">
                <input className="token-io-box-input-output-field" value={props.value} onChange={handleChange} disabled={!props.isDeposit}/>
            </div>
        </div>
    );
}