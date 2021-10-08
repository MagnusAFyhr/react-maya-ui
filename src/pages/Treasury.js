import React from 'react'

import HeaderContentBox from '../components/sandbox/HeaderContentBox';
import TreasuryBody from '../components/sandbox/treasury/TreasuryBody';
import { MyPositionData } from '../components/sandbox/my-positions/MyPositionsData'
import * as GiIcons from 'react-icons/gi'

function Treasury() {
    return (
        <div className='treasury'>
            <HeaderContentBox 
            icon={<GiIcons.GiLockedChest />} 
            title={"Treasury Info"}/>

            <TreasuryBody 
            title={"Treasury Positions"}
            data={MyPositionData}
            />
        </div>
    )
}

export default Treasury
