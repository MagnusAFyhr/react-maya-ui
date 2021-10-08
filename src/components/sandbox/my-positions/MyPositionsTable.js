// Table.js

import React from "react";
import { useTable, usePagination } from 'react-table'
import * as IoIcons from 'react-icons/io'

import './MyPositionsTable.css'

function MyPositionsTable({ columns, data }) {

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
      initialState: { pageIndex: 0, pageSize: 13},
    },
    usePagination
  )

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <div className='body'>
      <div className="table-wrap">
        <table className='table' {...getTableProps()}>

          <thead className='table-header'>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      {...column.getHeaderProps({
                        className: column.collapse ? 'collapse' : '',
                      })}
                    >
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
            ))}
          </thead>

          <tbody className='table-body' {...getTableBodyProps()}>
            {page.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
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
              <IoIcons.IoIosArrowDown className='icon'/>
        </button>
      </div>
    </div>
  );
}

export default MyPositionsTable