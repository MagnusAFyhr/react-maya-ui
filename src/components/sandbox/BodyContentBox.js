import React, { useMemo, useState, useEffect } from "react";

// title + icon
// data labels + values

import Table from "./Table";
import { MyPositionData } from './my-positions/MyPositionsData'

import './BodyContentBox.css'


function BodyContentBox(props) {

    const columns = useMemo(
        () => [
          {
            // first group - TV Show
            Header: " ",
            // First group columns
            columns: [
              {
                Header: "TokenId",
                accessor: "tokenId"
              },
              {
                Header: "Pool",
                accessor: "poolId"
              },
              {
                Header: "Value Locked",
                accessor: "valueLocked"
              },
              {
                Header: "APR",
                accessor: "apr"
              },
              {
                Header: "Earnings",
                accessor: "earnings"
              }
            ]
          }
        ],
        []
      );

    return (
        <>
            <div className='body-content-area'>
                <div className='body-content-box'>
                    <div className='body-content-box-header'>
                        <span>{props.title}</span>
                    </div>
                    <div className='body-content-box-body'>
                        <Table className='content-box-table' columns={columns} data={MyPositionData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyContentBox
