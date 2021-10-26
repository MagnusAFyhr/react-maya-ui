import React, { useState } from 'react';

import * as IoIcons from 'react-icons/io'
import Slider from '../../reusable/Slider';
import StandardButton from '../../reusable/StandardButton';
import ToggleSwitch from "../../reusable/ToggleSwitch";

import btc_logo from './btc.png';
import eth_logo from './eth.png';

import './PopUpActionPane.css'

function BuildDepositSubPane(tokenLogo) {

    const [amountToken1, setAmountToken1] = useState(0);
    const [amountToken2, setAmountToken2] = useState(0);

    const handleChangeToken1 = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setAmountToken1(value);
    };

    const handleChangeToken2 = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setAmountToken2(value);
    };
      
    return (
        <div>
            <div className="deposit-token-row">
                <div className="deposit-token-row-icon-area">
                    <img className='deposit-token-icon' src={tokenLogo} alt="img1" />
                </div>
                <div className="deposit-token-row-contents">
                    <input className="deposit-token-row-contents-amount" value={amountToken1} onChange={handleChangeToken1}/>
                    <div className="deposit-token-row-contents-balance">
                        Balance: ???
                        <span>(max)</span>                    
                    </div>
                </div>
            </div>
            <div className="deposit-token-row">
                <div className="deposit-token-row-icon-area">
                    <img className='deposit-token-icon' src={tokenLogo} alt="img1" />
                </div>
                <div className="deposit-token-row-contents">
                    <input className="deposit-token-row-contents-amount" value={amountToken2} onChange={handleChangeToken2}/>
                    <div className="deposit-token-row-contents-balance">
                        Balance: ???
                        <span>(max)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}



function PopUpActionPane(props) {

    const [value, setValue] = useState(true);

    function getTitle() {
        if (value) {
            return "Add Liquidity";
        } else {
            return "Remove Liquidity";
        }
    }

    function getBody() {
        if (value) {
            return (
                <div>
                    Add!
                </div>
            )
        } else {
            return (
                <>
                    <div className="slider-feedback-area">
                        <Slider maxValue={1000}/>
                    </div>
                </>
            )
        }
    }
    /**{BuildDepositSubPane(btc_logo)}
     <>
                    <div className="slider-feedback-area">
                        <Slider />
                    </div>
                </>
     * 
     */


    return (
        <>
            <div className='popup-action-pane-area'>
                <div className='popup-action-pane-header'>
                    <div className="popup-action-pane-title-area">
                        {getTitle()}
                    </div>
                    <div className="popup-action-pane-toggle-switch-area">
                        <ToggleSwitch
                            isOn={value}
                            onColor="#2bff00"
                            handleToggle={() => setValue(!value)}
                        />
                    </div>
                </div>
                <div className='popup-action-pane-body'>
                    <div className='popup-action-pane-body-border'>
                        {getBody()}
                    </div>
                </div> 
                <div className='popup-action-pane-footer'>
                    <StandardButton iconKey="confirm" />
                </div> 
            </div>
        </>
    )


}

export default PopUpActionPane


/**
 *                <div className='popup-action-pane-header'>
                    <div className="popup-action-pane-title-area">
                        {title}
                    </div>
                    <div className="popup-action-pane-toggle-switch-area">
                        <ToggleSwitch
                            isOn={value}
                            onColor="#EF476F"
                            handleToggle={() => setValue(!value)}
                        />
                    </div>
                </div>
                <div className='popup-action-pane-body'>
                    <div className='popup-action-pane-body-border'>
                        {buildDepositSubPane(btc_logo)}
                        {buildDepositSubPane(eth_logo)}
                    </div>
                </div>
                <div className='popup-action-pane-footer'>
                    <button className='popup-action-pane-action-button'>
                        <IoIcons.IoIosCheckmark />
                    </button>
                </div> 
 */