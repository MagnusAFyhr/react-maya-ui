import React from 'react'

import HeaderContentBox from '../components/sandbox/HeaderContentBox';
import * as FaIcons from 'react-icons/fa'

function Pools() {
    return (
        <>
            <div className='pools'>
                <HeaderContentBox 
                icon={<FaIcons.FaChartPie />} 
                title={"Pools Info"}/>
            </div>
        </>
    )
}

export default Pools
