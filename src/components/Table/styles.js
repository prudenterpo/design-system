import styled from "styled-components";
import colors from "../../styles/colors";

export const TableContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  overflow: auto;
  table {
    width: 100%;
    min-width: 900px;
    border-spacing: 0;
  }
  thead {
    background-color: ${colors.gray6};
    tr:nth-child(2) {
      background-color: ${colors.white};
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }
  }
  th,
  td {
    min-width: 150px;
    text-align: start;
    font-size: 0.8rem;
    text-transform: capitalize;
    padding: 10px 8px;
    color: ${colors.gray2};
    cursor: pointer;
  }
  tbody > tr:hover {
    background-color: ${colors.cleanGreen2} !important;
    color: #fff;
  }
  .selected-row {
    background-color: ${colors.gray6};
    td {
      font-weight: 700;
    }
    :active {
      background-color: ${colors.gray5};
    }
  }
`;

