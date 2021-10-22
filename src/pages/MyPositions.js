import React from 'react'
import HeaderContentBox from '../components/HeaderContentBox';
import MyPositionsBody from '../components/sandbox/my-positions/MyPositionsBody';
import { MyPositionData } from '../components/data/MyPositionsData'


import * as FaIcons from 'react-icons/fa'

function MyPositions() {

    const header_data = [
        {
          title: "# Positions",
          datapoint: 20
        },
        {
            title: "TVL",
            datapoint: "$1,000,000.00"
        },
        {
            title: "Net APR % (30d SMA)",
            datapoint: "256.34%"
        }
      ];

    return (
        <>
            <div className='my-positions'>
                <HeaderContentBox 
                icon={<FaIcons.FaUserAlt />} 
                title={"My Info"}
                data={header_data}
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
