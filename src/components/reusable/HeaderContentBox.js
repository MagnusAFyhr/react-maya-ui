import React from 'react'

import './HeaderContentBox.css'

export function LabelWithData({title, datapoint}) {
    return (
        <>
            <div className='lwd-box'>
                <div className='lwd-header'>
                    {title}
                </div>
                <div className='lwd-body'>
                    {datapoint}
                </div>
            </div>
        </>
    )
}

function HeaderContentBox(props) {

    return (
        <>
            <div className='content-area'>
                <div className='content-box'>
                    
                    <div className='content-header'>
                        {props.icon}
                        <span>{props.title}</span>
                    </div>

                    <div className='content-body'>
                        {
                            props.data.map((item) =>
                                <LabelWithData className='data-box' title={item.title} datapoint={item.datapoint}/>
                            )
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeaderContentBox
