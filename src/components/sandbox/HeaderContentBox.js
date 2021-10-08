import React from 'react'

// title + icon
// data labels + values

import './HeaderContentBox.css'

function HeaderContentBox(props) {
    return (
        <>
            <div className='content-area'>
                <div className='content-boxy'>
                    
                    <div className='content-header'>
                        {props.icon}
                        <span>{props.title}</span>
                    </div>

                    <div className='content-body'>
                        Body
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeaderContentBox
