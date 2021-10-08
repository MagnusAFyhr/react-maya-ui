import React from 'react'
import HeaderContentBox from '../components/sandbox/HeaderContentBox';
import MyPositionsBody from '../components/sandbox/my-positions/MyPositionsBody';
import { MyPositionData } from '../components/sandbox/my-positions/MyPositionsData'


import * as FaIcons from 'react-icons/fa'

function MyPositions() {
    return (
        <>
            <div className='my-positions'>
                <HeaderContentBox 
                icon={<FaIcons.FaUserAlt />} 
                title={"My Info"}
                />

                <MyPositionsBody 
                title={"My Positions"}
                data={MyPositionData}
                />
            </div>
        </>
    )
}

export default MyPositions
