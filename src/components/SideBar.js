import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa'

import { SidebarData } from './data/SidebarData'

import HorizontalMediaLinksGrid from '../single-use/HorizontalMediaLinksGrid'

import './SideBar.css'


// title 
// buttons
// wallet connect
// media links

function SideBar() {

    return (
        <>
            <div className='sidebar-panel'>
                <div className="title">
                    <h1>MAYA</h1>
                </div>

                <div className="buttons-panel">
                    <div>
                        {SidebarData.map((item, index) => {
                            return (
                                <button className="panel-button">
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="wallet-connect-area">
                    <div className="wallet-connect-button-area">
                        <button className='wallet-connect-button'>
                            <FaIcons.FaWallet />
                        </button>
                    </div>
                    <div className="wallet-connect-text">
                        <span>Connect to MetaMask!</span>
                    </div>
                </div>

                <div className="media-links-panel">
                    <HorizontalMediaLinksGrid />
                </div>

            </div>
        </>
    )
}

export default SideBar
