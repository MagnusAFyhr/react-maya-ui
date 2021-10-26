import React, { useMemo, useState, useEffect } from "react";

import * as IoIcons from 'react-icons/io'
import * as TiIcons from 'react-icons/ti'

import './PoolsBody.css'
import Card from "../../reusable/PoolCard";

import btc_logo from './btc.png';
import eth_logo from './eth.png';
import univ3_pos from './univ3-pos.png';
import StandardButton from "../../reusable/StandardButton";

function PoolsBody(props) {

  let cardData =
  {
    uniNFT: univ3_pos,
    tokenA: "TOK-A",
    tokenB: "TKB",
    iconTokenA: btc_logo,
    iconTokenB: eth_logo,
    attributes: [
      {
        title: "Fee Teir",
        point: "World"
      },{
        title: "Tick Range",
        point: "World"
      },{
        title: "APR",
        point: "World"
      },{
        title: "TVL",
        point: "World"
      },{
        title: "Members",
        point: "World"
      }
    ]
  }

  let poolData = [
    {
      uniNFT: univ3_pos,
      tokenA: "SUSHI",
      tokenB: "ETH",
      iconTokenA: btc_logo,
      iconTokenB: eth_logo,
      attributes: [
        {
          title: "Fee Teir",
          point: "World"
        },{
          title: "Tick Range",
          point: "World"
        },{
          title: "APR",
          point: "World"
        },{
          title: "TVL",
          point: "World"
        },{
          title: "Members",
          point: "World"
        }
      ]
    },{
      uniNFT: univ3_pos,
      tokenA: "MKR",
      tokenB: "ETH",
      iconTokenA: btc_logo,
      iconTokenB: eth_logo,
      attributes: [
        {
          title: "Fee Teir",
          point: "World"
        },{
          title: "Tick Range",
          point: "World"
        },{
          title: "APR",
          point: "World"
        },{
          title: "TVL",
          point: "World"
        },{
          title: "Members",
          point: "World"
        }
      ]
    },{
      uniNFT: univ3_pos,
      tokenA: "DAI",
      tokenB: "ETH",
      iconTokenA: btc_logo,
      iconTokenB: eth_logo,
      attributes: [
        {
          title: "Fee Teir",
          point: "World"
        },{
          title: "Tick Range",
          point: "World"
        },{
          title: "APR",
          point: "World"
        },{
          title: "TVL",
          point: "World"
        },{
          title: "Members",
          point: "World"
        }
      ]
    },{
      uniNFT: univ3_pos,
      tokenA: "USDC",
      tokenB: "ETH",
      iconTokenA: btc_logo,
      iconTokenB: eth_logo,
      attributes: [
        {
          title: "Fee Teir",
          point: "World"
        },{
          title: "Tick Range",
          point: "World"
        },{
          title: "APR",
          point: "World"
        },{
          title: "TVL",
          point: "World"
        },{
          title: "Members",
          point: "World"
        }
      ]
    },{
      uniNFT: univ3_pos,
      tokenA: "BTC",
      tokenB: "ETH",
      iconTokenA: btc_logo,
      iconTokenB: eth_logo,
      attributes: [
        {
          title: "Fee Teir",
          point: "World"
        },{
          title: "Tick Range",
          point: "World"
        },{
          title: "APR",
          point: "World"
        },{
          title: "TVL",
          point: "World"
        },{
          title: "Members",
          point: "World"
        }
      ]
    }
  ]

  const [pools, setPools] = useState(poolData)

  function addPoolCard() {
    setPools(pools => [...pools, cardData]);
  }
      
  return (
    <>
      <div className='pools-body-area'>
        <div className='pools-body-box'>
          <div className='pools-box-header'>
            <div className='pools-box-header-title'>
              Available Pools
            </div>
            <div className="pools-box-header-buttons">
              <StandardButton iconKey="search" />
              <StandardButton iconKey="filter" />
              <StandardButton iconKey="add" />
            </div>
          </div>
          <div className='pools-box-body-wrapper'>
            <div className='pools-box-body'>
              {
                pools.map((item) =>
                  <Card data={item} />
                )
              }
            </div>
          </div>
          <div className='table-footer'>
            <button className='load-more-button' onClick={() => addPoolCard()}>
              Load More
          </button>
      </div>
        </div>
      </div>
    </>
  )
}

export default PoolsBody
