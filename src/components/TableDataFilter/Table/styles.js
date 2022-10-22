import styled from 'styled-components';
import colors from '../../../styles/colors';

export const TableContainer = styled.div `
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
  }
  th, td {
  min-width: 150px;
  text-align: start;
  font-size: 0.8rem;
  text-transform: capitalize;
  padding: 10px 8px;
  color: ${colors.gray2};
  cursor: pointer;
  }
  tbody > tr:hover {
    background-color: ${colors.cleanGreen2
    } !important;
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
  select {
    padding: 3px 0 2px;
  }
  option {
    padding: 10px;
  }
`;

// export const TablePagination = styled.div `
//   display: flex;
//   width: 100%;
//   justify-content: flex-end;
//   align-items: center;
//   margin-top: 10px;
// `;

// export const PaginationItem = styled.div `
//   margin-left: 10px;
//   padding-top: 3px;
//   width: 20px;
//   height: 20px;
//   font-size: 0.7rem;
//   color: ${colors.gray2};
//   border-radius: 50%;
//   align-items: center;
//   text-align: center;
//   justify-content: center;
//   cursor: pointer;
//   &.active {
//     background-color: ${colors.cleanGreen2};
//     color: ${colors.white};
//     font-weight: 600;
//   }
//   &.active:hover {
//     background-color: ${colors.cleanGreen2};
//     color: ${colors.white};
//     font-weight: 600;
//   }
//   &:hover {
//     color: #000;
//     background-color: #f4f4f4;
//   }
// `;

