import React from 'react'

import PopUpBox from '../components/sandbox/dashboard/PopUpBox';

import btc_logo from './btc.png';
import eth_logo from './eth.png';
import univ3_pos from './univ3-pos.png';

function Dashboard() {

    const cardData =
    {
        uniNFT: univ3_pos,
        tokenA: "BTC",
        tokenB: "ETH",
        iconTokenA: btc_logo,
        iconTokenB: eth_logo,
        attributes: [
        {
          title: "Hello",
          point: "World"
        },{
          title: "Hello",
          point: "World"
        },{
          title: "Hello",
          point: "World"
        },{
          title: "Hello",
          point: "World"
        },{
          title: "Hello",
          point: "World"
        },{
          title: "Hello",
          point: "World"
        }
      ]
    }

    return (
        <>
            <div className='dashboard'>
                <PopUpBox 
                cardData={cardData}
                />
            </div>
        </>
    )
}

export default Dashboard
