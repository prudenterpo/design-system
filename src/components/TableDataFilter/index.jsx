import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { mockData, docTableHead, filterFieldData } from "../../mockData/mockDataTable";

//LIBS
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

//COMPONENTS
import { Table } from "../Table";

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

export const TableDataFilter = () => {
  const [rowIndexClicked, setRowIndexClicked] = useState(null);
  const [isEnableTableButton, setIsEnableTableButton] = useState(false);
  const [selectFilter, setSelectFilter] = useState();
  const [headerTableData, setHeaderTableData] = useState(docTableHead);
  const [bodyTableData, setBodyTableData] = useState(mockData);

  
  useEffect(() => {
    searchfilterTable();
  }, [selectFilter]);
  
  function searchfilterTable() {
    if(selectFilter) {
      const filteredList = mockData
      .filter((item) => item.documentName.includes(selectFilter));
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
      <select key={index} onChange={selectFilterData}>
        <option>Filtrar por..</option>
        {value.map((item) => (
          <option>{item}</option>
        ))}
      </select>
      <button>X</button>
    </td>
  );

  const renderBody = (value, index) => (
    <tr
      key={index}
      onClick={() => handleRowClicked(index)}
      className={rowIndexClicked === index ? "selected-row" : null}
    >
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <td>{value.documentName}</td>
      <td>{value.documentType}</td>
      <td>{value.timestamp}</td>
      <td>{value.createdBy}</td>
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
        <table>
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
        </table>
      </TableContainer>
    </TableCard>
  );
};

TableDataFilter.propTypes = {
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
