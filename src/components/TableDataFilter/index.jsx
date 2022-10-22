import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { mockData, docTableHead, filterFieldData } from './mockData';

//LIBS
import { RiDeleteBin2Line } from "react-icons/ri";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { AiOutlineExport } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

//COMPONENTS
import { Table } from "./Table";

//STYLES

import {
  BtnContainer,
  // PageContainer,
  HeaderBtn,
  Title,
  HeaderEditor,
  TableCard,
} from "./styles";

export const TableDataFilter = ({ rowLimitPerPage, headData, bodyData, filterData }) => {
  const [rowIndexClicked, setRowIndexClicked] = useState(null);
  const [isEnableTableButton, setIsEnableTableButton] = useState(false);
  const [selectFilter, setSelectFilter] = useState();

  useEffect(() => {
    alert(selectFilter)
  }, [selectFilter]);

  async function handleRowClicked(docName, rowIndex) {
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
      textColor: "orange",
      click: function1,
      disabled: isEnableTableButton,
      className: isEnableTableButton ? "" : "show-btn",
      icon: <HiOutlineDocumentSearch />,
    },
    {
      text: "Editar",
      textColor: "brown",
      click: function2,
      disabled: isEnableTableButton,
      className: isEnableTableButton ? "" : "show-btn",
      icon: <AiFillEdit />,
    },
    {
      text: "Aprovar",
      textColor: "lightblue",
      click: function3,
      disabled: isEnableTableButton,
      className: isEnableTableButton ? "" : "show-btn",
      icon: <BsFillHandThumbsUpFill />,
    },
    {
      text: "Exportar",
      textColor: "red",
      click: function4,
      disabled: isEnableTableButton,
      className: isEnableTableButton ? "" : "show-btn",
      icon: <AiOutlineExport />,
    },
  ];
  
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderFilter = (value, index) => (
    <td>
      <select
        key={index}
        onChange={(e) => setSelectFilter(e.target.value)}
      >
        <option>Todes..</option>
      {
        value.map((item) =>
          <option>{item}</option>
        )
      }
      </select>
    </td> 
  );

  const renderBody = (value, index) => (
    <tr
      key={index}
      onClick={() => handleRowClicked(value.documentName, index)}
      className={rowIndexClicked === index ? "selected-row" : null}
    >
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
      <Table
        limit={rowLimitPerPage}
        headData={headData}
        renderHead={(item, index) => renderHead(item, index)}
        bodyData={bodyData}
        renderBody={(value, index) => renderBody(value, index)}
        filterData={filterData}
        renderFilter={(value, index) => renderFilter(value, index)}
      />
    </TableCard>
  );
};

TableDataFilter.propTypes = {
  rowLimitPerPage: PropTypes.number,
  headData: PropTypes.array,
  bodyData: PropTypes.array,
};

TableDataFilter.defaultProps = { 
  rowLimitPerPage: 10,
  headData: docTableHead,
  bodyData: mockData,
  filterData: filterFieldData
};