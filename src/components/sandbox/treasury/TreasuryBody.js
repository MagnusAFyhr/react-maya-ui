import React, { useMemo, useState, useEffect } from "react";

// title + icon
// data labels + values

import Table from "../my-positions/MyPositionsTable";

import * as IoIcons from 'react-icons/io'
import * as WiIcons from 'react-icons/wi'


import './TreasuryBody.css'

function TreasuryBody(props) {

    const columns = useMemo(
        () => [
          {
            Header: props.title,

            columns: [
              {
                Header: "TokenId",
                accessor: "tokenId",
                collapse: true
              },
              {
                Header: "Pool",
                accessor: "poolName",
              },
              {
                Header: "Value Locked",
                accessor: "valueLocked",
              },
              {
                Header: "APR",
                accessor: "apr",
                collapse: true
              },
              {
                Header: "Revenue",
                accessor: "earnings",
              }
            ]
          }
        ],
        []
      );
      
    return (
        <>
            <div className='treasury-body-area'>
                <div className='treasury-body-box'>
                    <div className='treasury-box-body'>
                        <Table className='treasury-table' columns={columns} data={props.data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TreasuryBody
