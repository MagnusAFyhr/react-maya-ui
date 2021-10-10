import React from 'react'

import HeaderContentBox from '../components/sandbox/HeaderContentBox';
import BodyContentBox from '../components/sandbox/pools/PoolsBody';
import { MyPositionData } from '../components/sandbox/my-positions/MyPositionsData'

import * as FaIcons from 'react-icons/fa'

function Pools() {

    const header_data = [
        {
          title: "one",
          datapoint: 1
        },
        {
            title: "two",
            datapoint: 2   
        },
        {
            title: "three",
            datapoint: 3
        },
        {
          title: "four",
          datapoint: 4
        },
        {
            title: "five",
            datapoint: 5
        },
        {
            title: "six",
            datapoint: 6
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

                <BodyContentBox 
                title={"Available Pools"}
                />
                
            </div>
        </>
    )
}

export default Pools
