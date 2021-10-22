import React, { useState } from 'react';

import * as IoIcons from 'react-icons/io'
import ToggleSwitch from "../../reusable/ToggleSwitch";

import btc_logo from './btc.png';
import eth_logo from './eth.png';

import './PopUpActionPane.css'

function buildDepositSubPane(tokenLogo) {
    return (
        <>
            <div className="deposit-token-row">
                <div className="deposit-token-row-icon-area">
                    <img className='deposit-token-icon' src={tokenLogo} alt="img1" />
                </div>
                <div className="deposit-token-row-contents">
                    <div className="deposit-token-row-contents-amount">
                        0.0
                    </div>
                    <div className="deposit-token-row-contents-balance">
                        Balance: 0.043824 (max)
                    </div>
                </div>
            </div> 
        </>
    )
}

function PopUpDepositPane(props) {

    let onTitle = "Add Liquidity";
    let offTitle = "Add Liquidity";

    const [value, setValue] = useState(true);

    function getTitle() {
        if (value) {
            return "Add Liquidity";
        } else {
            return "Remove Liquidity";
        }
    }

    function getBody() {
        
    }


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
                        
                    </div>
                </div> 
                <div className='popup-action-pane-footer'>
                    <button className='popup-action-pane-action-button'>
                        <IoIcons.IoIosCheckmark />
                    </button>
                </div> 
            </div>
        </>
    )


}

export default PopUpDepositPane


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