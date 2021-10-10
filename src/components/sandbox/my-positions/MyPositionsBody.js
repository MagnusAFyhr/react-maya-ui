import React, { useMemo, useState, useEffect } from "react";

// title + icon
// data labels + values

import Table from "./MyPositionsTable";

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
                Header: "Earnings",
                accessor: "earnings",
              },
              {
                Header: "Actions",
                accessor: "actions",
                collapse: true,
                Cell: ({ row }) => (
                  <span>
                    <button className='action-button'><IoIcons.IoIosAdd /></button>
                    <button className='action-button'><IoIcons.IoIosRemove /></button>
                    <button className='action-button'><IoIcons.IoIosClose /></button>
                    <button className='action-button'><WiIcons.WiRefresh /></button>
                  </span>
                ),
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
                        <Table className='content-box-table' initPageSize={13} columns={columns} data={props.data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPositionsBody
