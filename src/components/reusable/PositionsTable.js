// Table.js

import React, {useState} from "react";
import { useTable, usePagination, useSortBy } from 'react-table'
import * as IoIcons from 'react-icons/io'

import './PositionsTable.css'

import PopUpBox from "../sandbox/dashboard/PopUpBox";

import btc_logo from '../../../src/btc.png';
import eth_logo from '../../../src/eth.png';
import univ3_pos from '../../../src/univ3-pos.png';


function PositionsTable({ initPageSize, columns, data, hasClickableRows }) {

const dummyPoolData = {
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
}

  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: initPageSize},
    },
    useSortBy,
    usePagination
  )

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const [poolPopUpData, setPoolPopUpData] = useState(dummyPoolData);

  const togglePopup = () => {
    setIsPopUpVisible(!isPopUpVisible);
  }
  
  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <>
      {isPopUpVisible && <PopUpBox cardData={dummyPoolData} onClose={togglePopup} />}
      <div className='body'>
        <div className="table-wrap">
          <table className='table' {...getTableProps()}>

            <thead className='table-header'>
              {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps(column.getSortByToggleProps())} >
                        {column.render('Header')}
                        <span>
                          {column.isSorted ? (column.isSortedDesc ? 
                          <IoIcons.IoIosArrowRoundDown style={{fontSize:15, alignItems:"center"}}/>  : 
                          <IoIcons.IoIosArrowRoundUp style={{fontSize:15, alignItems:"center"}}/>) : ''}
                        </span>
                      </th>
                    ))}
                  </tr>
              ))}
            </thead>

            <tbody className='table-body' {...getTableBodyProps()}>
              {page.map((row, i) => {
                  prepareRow(row)
                  return (
                      <tr className='table-row' {...row.getRowProps()} onClick={() => togglePopup()} style={{cursor:"pointer"}}>
                          {row.cells.map(cell => {
                          return (
                              <td
                                  {...cell.getCellProps({
                                  className: cell.column.collapse ? 'collapse' : '',
                                  })}
                              >
                                  {cell.render('Cell')}
                              </td>
                          )
                          })}
                      </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
        <div className='table-footer'>
          <button className='load-more-button' onClick={() => setPageSize(pageSize + 3)}>
                Load More
          </button>
        </div>
      </div>
    </>
  );
}

export default PositionsTable