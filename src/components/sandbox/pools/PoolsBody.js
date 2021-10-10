import React, { useMemo, useState, useEffect } from "react";

import * as IoIcons from 'react-icons/io'
import * as TiIcons from 'react-icons/ti'


import Table from "../my-positions/MyPositionsTable";

import './PoolsBody.css'
import Card from "./PoolCard"

import btc_logo from './btc.png';
import eth_logo from './eth.png';

const poolData =
    {
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

function PoolsBody(props) {

  const cardData =
  {
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

  let poolData = [
    {
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
    },{
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

    },{
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

    },{
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

    },{
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

    }, {
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

    },    {
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
    },{
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

    },{
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

    },{
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

    },{
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

    }, {
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

    },{
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
    },{
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

    },{
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

    },{
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

    },{
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

    }, {
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
  ]

  const [pools, setPools] = useState("")

  function addPoolCard() {
    setPools(pools => [...pools, poolData]);
  }
      
  return (
    <>
      <div className='pools-body-area'>
        <div className='pools-body-box'>
          <div className='pools-box-header'>
            Available Pools
            <span>
              <button className='create-pool-button'><IoIcons.IoIosAdd /></button>
              <button className='filter-pools-button'><TiIcons.TiFilter /></button>
              <button className='create-pool-button'><IoIcons.IoIosSearch /></button>
            </span>
          </div>
          <div className='pools-box-body-wrapper'>
            <div className='pools-box-body'>
              {
                poolData.map((item) =>
                  <Card data={item}/>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PoolsBody
