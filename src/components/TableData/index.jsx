import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from 'react-table';

import { mockData, docTableHead, COLUMNS } from "../../mockData/mockDataTable";

import  { HiOutlineDocumentSearch } from "react-icons/hi";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import {FaSortAlphaUpAlt } from "react-icons/fa";
import { FaSortAlphaDown } from "react-icons/fa";

//COMPONENTS
import InputFilter from "../InputFilter";
import ColumnFilter from "../ColumnFilter";
import SelectFilter from "../SelectFilter";
//STYLES
import colors from '../../styles/colors';
import {
  TableContainer,
  Title,
  HeaderBtn,
  TableCard,
  FilterHeaderContainer
} from "./styles";

export const TableData = () => {
  const [rowIndexClicked, setRowIndexClicked] = useState(null);
  const [isEnableTableButton, setIsEnableTableButton] = useState(true);
  const [selectFilter, setSelectFilter] = useState();
  const [headerTableData, setHeaderTableData] = useState(docTableHead);
  const [bodyTableData, setBodyTableData] = useState(mockData);

  const limit = 10;
  const initDataShow = limit && bodyTableData ? bodyTableData.slice(0, Number(limit)) : bodyTableData;
  const [dataShow, setDataShow] = useState(initDataShow);
  const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(0);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => mockData, []);

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows,
    page,
    nextPage,
    previousPage, 
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter, 
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 }},
    useFilters, 
    useGlobalFilter, 
    useSortBy,
    usePagination
  )

  const { globalFilter, pageIndex, pageSize } = state;

  async function handleRowClicked(rowIndex) {
    console.log(rowIndex);
    if (rowIndexClicked !== rowIndex) {
      setRowIndexClicked(rowIndex);
    } else {
      setRowIndexClicked(null);
    }
    if (rowIndexClicked === null || rowIndexClicked !== rowIndex) {
      setIsEnableTableButton(true);
    } else {
      setIsEnableTableButton(false);
    }
  }

  const function1 = () => {
    console.log("Ver detalhes");
    alert("Ver detalhes!");
  };
  const function2 = () => {
    console.log("Editar");
    alert("Editar!");
  };
  const function3 = () => {
    console.log("Aprovar");
    alert("Aprovar!");
  };
  const function4 = () => {
    console.log("Exportar");
    alert("Exportar!");
  };

  const toolbarOptions = [
    {
      text: "Ver Detalhes",
      textColor: colors.gray1, 
      click: function1,
      disabled: isEnableTableButton,
      className: isEnableTableButton ? "" : "show-btn",
      icon: <HiOutlineDocumentSearch />,
    },
    {
      text: "Editar",
      textColor: colors.gray1,
      click: function2,
      disabled: isEnableTableButton,
      className: isEnableTableButton ? "" : "show-btn",
      icon: <AiFillEdit />,
    },
    {
      text: "Aprovar",
      textColor: colors.pureGreen,
      click: function3,
      disabled: isEnableTableButton,
      className: isEnableTableButton ? "" : "show-btn",
      icon: <BsFillHandThumbsUpFill />,
    },
    {
      text: "Reprovar",
      textColor: colors.alertRed,
      click: function4,
      disabled: isEnableTableButton,
      className: isEnableTableButton ? "" : "show-btn",
      icon: <BsFillHandThumbsDownFill/>,
    },
  ];

  return (
    <TableCard>
        <Title>Título da tabela</Title>
      <HeaderBtn>
        {toolbarOptions.map((value, index) => {
          return (
            <button
              key={index}
              onClick={value.click}
              disabled={!value.disabled}
              className={value.className}
              style={{ color: value.textColor }}
            >
              {value.icon} {value.text}
            </button>
          );
        })}
        <InputFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </HeaderBtn>
      <TableContainer>
        <table {...getTableProps()}>
          <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? <FaSortAlphaDown /> : <FaSortAlphaUpAlt />) : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th>
                      <FilterHeaderContainer>
                        {column.canFilter ? column.render(
                          column.textField == true ? <ColumnFilter filterValue={column.filterValue} setFilter={column.setFilter}/> : <SelectFilter filterValue={column.filterValue} setFilter={column.setFilter} indexValue={index} list={rows}/>) 
                          : null}
                      </FilterHeaderContainer>
                    </th>
                  ))}
                </tr>
              ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row)
              return (
                <tr 
                  onClick={() => handleRowClicked(index)}  
                  className={rowIndexClicked === index ? "selected-row" : null} 
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div>
          <span> Página{' '}<strong>{pageIndex + 1} de {pageOptions.length}</strong></span>
          
          <span>
            Ir para página: {' '}          
            <input 
              type="number" defaultValue={pageIndex + 1}
              onChange={e => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
              }}
            />
          </span>
          <div>
            <span>Linhas por página: {' '}</span>
            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
              {[5, 10, 15, 20, 25, 30].map((pageSize) => (
                  <option>
                    {pageSize}
                  </option>
              ))}
            </select>
          </div>
          
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>Anterior</button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>Próxima</button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        </div>
      </TableContainer>
    </TableCard>
  );
};

TableData.propTypes = {
  rowLimitPerPage: PropTypes.number,
  headData: PropTypes.array,
  bodyData: PropTypes.array,
};

// TableDataFilter.defaultProps = {
//   rowLimitPerPage: 10,
//   headData: docTableHead,
//   bodyData: mockData,
//   filterData: filterFieldData,
// };
