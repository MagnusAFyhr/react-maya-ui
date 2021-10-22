import React, { useMemo, useState, useEffect } from "react";

import * as IoIcons from 'react-icons/io'
import * as WiIcons from 'react-icons/wi'

import PopUpActionPane from './PopUpActionPane'
import './PopUpBox.css'

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
function loadDepositPanel() {
  return (
    <>
    
    </>
  )
}

function loadWithdrawPanel() {
  return (
    <>

    </>
  )
}


function PopUpBox(props) {

  return (
    <>
      <div className='popup-box-area'>
        <div className='popup-box-shell'>
          <div className='popup-box-header'>
            <div className='popup-box-other-area'>
              <div className='popup-box-inrange-icon'> 
                <circle className='popup-box-inrange-signal'/> 
                 In Range 
              </div>
            </div>
            <div className='popup-box-title-area'>
              <div className='popup-box-title-icons'>
                <img className='popup-token-icon-2' src={props.cardData.iconTokenB} alt="img1" />
                <img className='popup-token-icon-1' src={props.cardData.iconTokenA} alt="img2" />
              </div>
              <div className='popup-box-title-label'>
                {props.cardData.tokenA}/{props.cardData.tokenB}
              </div>
            </div>
            <div className='popup-box-compound-button-area'>
              <button className='popup-box-compound-button'>
                <WiIcons.WiRefresh />
              </button>
            </div>
            <div className='popup-box-close-button-area'>
              <button className='popup-box-close-button' onClick={props.onClose}>
                <IoIcons.IoIosClose />
              </button>
            </div>
          </div>

          <div className='popup-box-body'>
            <div className='popup-box-body-left'>
              <img className='popup-pos-img' src={props.cardData.uniNFT} alt="img3" />
            </div>
            <div className='popup-box-body-right'>
              <div className='popup-box-right-div-area-top'>
                <div className='popup-data-column'>
                  {
                      props.cardData.attributes.map((item) =>
                          makeDataRow(item.title, item.point)
                      )
                  }
                </div>
              </div>
              <div className='popup-box-right-div-area-bottom'>
                <PopUpActionPane />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopUpBox