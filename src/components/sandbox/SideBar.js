import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { SidebarData } from '../SidebarData'

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
                    <h1>Maya V1.0</h1>
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

                <div className="wallet-connect">

                </div>

                <div className="media-links-panel">
            
                </div>

            </div>
        </>
    )
}

export default SideBar
