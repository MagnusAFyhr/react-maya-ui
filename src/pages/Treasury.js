import React from 'react'

import HeaderContentBox from '../components/reusable/HeaderContentBox';
import TreasuryBody from '../components/sandbox/treasury/TreasuryBody';
import { MyPositionData } from '../components/data/MyPositionsData'
import * as GiIcons from 'react-icons/gi'

function Treasury() {

    const header_data = [
        {
          title: "# Positions",
          datapoint: 100
        },
        {
            title: "TVL",
            datapoint: "$10,000,000.00"
        },
        {
          title: "Net APR % (30d SMA)",
          datapoint: "150.00%"
        },
        {
            title: "Revenue (1y SMA)",
            datapoint: "$1,000,000.00"
        }
      ];

    return (
        <div className='treasury'>
            <HeaderContentBox 
            icon={<GiIcons.GiLockedChest />} 
            title={"Treasury Info"}
            data={header_data}
            />

            <TreasuryBody 
            title={"Treasury Positions"}
            data={MyPositionData}
            />
        </div>
    )
}

export default Treasury
