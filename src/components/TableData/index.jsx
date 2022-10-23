import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import { useTable, useSortBy } from 'react-table';

import { mockData, docTableHead, filterFieldData, COLUMNS } from "../../mockData/mockDataTable";

import  { HiOutlineDocumentSearch } from "react-icons/hi";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import {FaSortAlphaUpAlt } from "react-icons/fa";
import { FaSortAlphaDown } from "react-icons/fa";

//COMPONENTS
import { Pagination } from '../Pagination';

//STYLES
import colors from '../../styles/colors';
import {
  BtnContainer,
  // PageContainer,
  HeaderBtn,
  Title,
  HeaderEditor,
  TableCard,
  TableContainer
} from "./styles";

export const TableData = () => {
  const [rowIndexClicked, setRowIndexClicked] = useState(null);
  const [isEnableTableButton, setIsEnableTableButton] = useState(false);
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
    prepareRow, 
  } = useTable({ columns, data }, useSortBy)

  useEffect(() => {
    searchfilterTable();
  }, [selectFilter]);
  
  function searchfilterTable() {
    if(selectFilter) {
      const filteredList = mockData
      .filter((item) => item.portifolio_or_presignup.includes(selectFilter));
      setBodyTableData(filteredList);
    }
  };
  
  async function handleRowClicked(rowIndex) {
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
      textColor: colors.gray2, 
      click: function1,
      disabled: isEnableTableButton,
      className: isEnableTableButton ? "" : "show-btn",
      icon: <HiOutlineDocumentSearch />,
    },
    {
      text: "Editar",
      textColor: colors.gray2,
      click: function2,
      disabled: isEnableTableButton,
      className: isEnableTableButton ? "" : "show-btn",
      icon: <AiFillEdit />,
    },
    {
      text: "Aprovar",
      textColor: colors.cleanGreen,
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

  const selectFilterData = (e) => {
    setSelectFilter(e.target.value);
  };
  
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  
  const renderFilter = (value, index) => (
    <td>
      {value[0] !== "textInput" ?
        <select key={index} onChange={selectFilterData}>
          <option>Filtrar por..</option>
          {value.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      : 
        <input type="text" placeholder="Filtrar por.." onChange={selectFilterData} />
      }
      <button>X</button>
    </td>
  );

  const renderBody = (value, index) => (
    <tr
      key={index}
      onClick={() => handleRowClicked(index)}
      className={rowIndexClicked === index ? "selected-row" : null}
    >
      <div>
        <input type="checkbox" id="" value="" />
      </div>
      <td>{value.portifolio_or_presignup}</td>
      <td>{value.cpfOrCnpj}</td>
      <td>{value.typeOfPerson}</td>
      <td>{value.agroindustry}</td>
      <td>{value.product}</td>
      <td>{value.guarantees}</td>
      <td>{value.production}</td>
      <td>{value.destination}</td>
      <td>{value.modality}</td>
      <td>{value.id_tax}</td>
    </tr>
  );

  return (
    <TableCard>
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
      </HeaderBtn>
      {/* <Table
        limit="10"
        headData={headerTableData}
        renderHead={(item, index) => renderHead(item, index)}
        bodyData={bodyTableData}
        renderBody={(value, index) => renderBody(value, index)}
        filterData={filterFieldData}
        renderFilter={(value, index) => renderFilter(value, index)}
      /> */}
      <TableContainer>
        <table {...getTableProps()}>
          <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? <FaSortAlphaDown /> : <FaSortAlphaUpAlt />) : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* <table>
          {headerTableData && renderHead && filterFieldData && renderFilter ? (
            <thead>
              <tr>
                <input type="checkbox" id="" name="" value="" />
                {
                  headerTableData.map((item, index) => renderHead(item, index))
                }
              </tr>
              <tr>
                <button>limpar</button>
                {
                  filterFieldData.map((item, index) => renderFilter(item, index))
                }
              </tr>
            </thead>
          ) : null}

          {bodyTableData && renderBody ? (
            <tbody>
              {
                bodyTableData.map((item, index) => renderBody(item, index))
              }
            </tbody>
          ) : null}
        </table> */}
      </TableContainer>
        {/* <Pagination 
          limitOfPage={limit}
          totalItems={bodyTableData.length}
          offset={offset}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setDataShow={setDataShow}
          bodyData={bodyTableData}
        /> */}
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
