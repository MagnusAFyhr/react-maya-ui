import React, { useMemo, useState, useEffect } from "react";

// title + icon
// data labels + values

import Table from "../../reusable/PositionsTable";

import * as IoIcons from 'react-icons/io'
import * as WiIcons from 'react-icons/wi'


import './MyPositionsBody.css'

function MyPositionsBody(props) {

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
                Header: "Shares",
                accessor: "shares",
              }
            ]
          }
        ],
        []
      );
      
    return (
        <>
            <div className='my-pos-body-area'>
                <div className='my-pos-body-box'>
                    <div className='my-pos-box-body'>
                        <Table className='content-box-table' initPageSize={12} columns={columns} data={props.data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPositionsBody
