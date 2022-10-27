import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { CSVLink } from "react-csv";
import { 
  useTable, 
  useSortBy, 
  useGlobalFilter, 
  useFilters, 
  usePagination
} from 'react-table';
//DATA
import { mockData, COLUMNS, headersCSV } from "../../mockData/mockDataTable";
//ICONS
import  { HiOutlineDocumentSearch } from "react-icons/hi";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import {FaSortAlphaUpAlt } from "react-icons/fa";
import { FaSortAlphaDown } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";
import { 
  BsFillCaretRightFill, 
  BsSkipBackwardFill, 
  BsFillSkipForwardFill, 
  BsFillCaretLeftFill 
} from "react-icons/bs";

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
  FilterHeaderContainer,
  PaginationContainer
} from "./styles";

export const TableData = () => {
  const [rowIndexClicked, setRowIndexClicked] = useState(null);
  const [isEnableTableButton, setIsEnableTableButton] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [rowClickedValues, setRowClickedValues] = useState([]);
  
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => mockData, []);
  const defaultColumn = useMemo(() => ({
    width: 150,
    minWidth: 150,
    maxWidth: 250
  }))

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
    { columns, 
      data, 
      initialState: { pageIndex: 0 },
      defaultColumn
    },
    useFilters, 
    useGlobalFilter, 
    useSortBy,
    usePagination,
  )
  const { globalFilter, pageIndex, pageSize } = state;

  const csvReport = {
    filename: 'Report.csv',
    headers: headersCSV,
    data: filteredData 
  }

  const filterValue = [];
    const test = () => {
    rows.map((row) => (
      filterValue.push(row.values)
    ))
    setFilteredData(filterValue)
  }

  async function handleRowClicked(rowIndex) {
    const rowData = rows[rowIndex].values;
    if (rowIndexClicked !== rowIndex) {
      setRowIndexClicked(rowIndex);
    } else {
      setRowIndexClicked(null);
    }
    setRowClickedValues(rowData);
  }
  console.log(rowClickedValues)

  const function1 = () => {
    console.log("Ver detalhes");
    alert(JSON.stringify(rowClickedValues));
  };
  const function2 = () => {
    console.log("Exportar");
    alert("Exportar!");
  };
  const function3 = () => {
    console.log("Aprovar");
    alert("Aprovar!");
  };
  const function4 = () => {
    console.log("Reprovar");
    alert("Reprovar!");
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
      text: "Exportar",
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
      icon: <BsFillHandThumbsDownFill />,
    },
  ];

  return (
    <TableCard>
        <Title>Título da tabela</Title>
      <HeaderBtn>
        <CSVLink onClick={() => test()} {...csvReport}><SiMicrosoftexcel /></CSVLink>
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
                    <th {...column.getHeaderProps({ style: { minWidth: column.minWidth, width: column.width }})}>
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
                  {...row.getRowProps({ style: { minWidth: row.minWidth, width: row.width }})}
                >
                  {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps({ style: { minWidth: cell.column.minWidth, width: cell.column.width }})}>
                      {cell.render('Cell')}
                    </td>
                  );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>
        <PaginationContainer>
          <div>
            <span>
              Ir para página: {' '}          
            </span>
            <input 
              type="number" defaultValue={pageIndex + 1}
              onChange={e => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
              }}
            />
          </div>
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
          <div>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}><BsSkipBackwardFill /></button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}><BsFillCaretLeftFill /></button>
            <span>{pageIndex + 1} de {pageOptions.length}</span>
            <button onClick={() => nextPage()} disabled={!canNextPage}><BsFillCaretRightFill /></button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}> <BsFillSkipForwardFill /></button>
          </div>
        </PaginationContainer>
    </TableCard>
  );
};

TableData.propTypes = {
  headData: PropTypes.array,
  bodyData: PropTypes.array,
};

// TableDataFilter.defaultProps = {
//   rowLimitPerPage: 10,
//   headData: docTableHead,
//   bodyData: mockData,
//   filterData: filterFieldData,
// };
