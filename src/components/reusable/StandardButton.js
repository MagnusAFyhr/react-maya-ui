import React, {Component} from 'react';

import * as IoIcons from 'react-icons/io'
import * as WiIcons from 'react-icons/wi'
import * as TiIcons from 'react-icons/ti'


import "./StandardButton.css"

export default function StandardButton(props) {

    const buttonIcons = {
        add : <IoIcons.IoIosAdd />,
        close : <IoIcons.IoIosClose/>,
        compound : <WiIcons.WiRefresh />,
        confirm : <IoIcons.IoIosCheckmark />,
        filter : <TiIcons.TiFilter />,
        search : <IoIcons.IoIosSearch />
    }


    return (
        <button className="reusable-button" onClick={props.handleClick}>
            <div className='reusable-button-icon'>{buttonIcons[props.iconKey]}</div>
        </button>
    );
}