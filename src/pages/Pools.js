import React from 'react'

import HeaderContentBox from '../components/reusable/HeaderContentBox';
import PoolsBody from '../components/sandbox/pools/PoolsBody';

import * as FaIcons from 'react-icons/fa'

function Pools() {

    const header_data = [
        {
          title: "# Pools",
          datapoint: 1
        },
        {
            title: "# Positions",
            datapoint: 2   
        },
        {
            title: "TVL",
            datapoint: 3
        }
      ];

    return (
        <>
            <div className='pools'>
                <HeaderContentBox 
                icon={<FaIcons.FaChartPie />} 
                title={"Pools Info"}
                data={header_data}
                />

                <PoolsBody 
                title={"Available Pools"}
                />
                
            </div>
        </>
    )
}

export default Pools
