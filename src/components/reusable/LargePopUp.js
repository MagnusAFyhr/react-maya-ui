import React, { useMemo, useState, useEffect } from "react";

import "./LargePopUp.css"

function LargePopUp(props) {

    return (
        <>
            <div className='large-popup-area'>
                <div className='large-popup-border'>

                    <div className='large-popup-header'>
                        <div className='large-popup-left-header-area'>
                            {props.leftHeaderArea}
                        </div>
                        <div className='large-popup-title-area'>
                            {props.titleArea}
                        </div>
                        <div className='large-popup-right-header-area'>
                            {props.rightHeaderArea}
                        </div>
                    </div>

                    <div className='large-popup-body'>
                        <div className='large-popup-body-left'>
                            {props.leftBody}
                        </div>
                        <div className='large-popup-body-right'>
                            {props.rightBody}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default LargePopUp