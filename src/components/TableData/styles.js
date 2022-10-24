import styled from 'styled-components';

import colors from '../../styles/colors';

export const TableCard = styled.div`
  padding: 19px;
  margin-bottom: 29px;
  background-color: ${colors.white};
  box-shadow: rgba(148, 157, 165, 0.2) 0 8px 24px;
  border-radius: 14px;
`;

export const TableContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 5px;
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
    color: ${colors.gray1};
    cursor: pointer;
  }
  tr:nth-child(even){
    background-color: ${colors.smock};
  }
  tbody > tr:hover {
    background-color: ${colors.gray5};
  }
  .selected-row {
    td {
      color: ${colors.white};
      background-color: ${colors.pureGreen};
    }
    :active {
      background-color: ${colors.gray5};
    }
  }
`;

export const Title = styled.h3`
  color: ${colors.gray1};
  margin: 10px auto 0px 0;
  font-size: 1.6rem;
`;

export const HeaderBtn = styled.div `
  display: flex;
  margin: 30px auto 0 0;
  .show-btn {
    opacity: 0; 
    cursor: default;
  }
  button {
    font-size: 0.8rem;
    margin: 0 4px 10px 10px;
    font-size: 0.8rem;
    font-weight: 500;
    border-bottom: 1px solid ${colors.gray6} !important; 
    border-right: 1px solid ${colors.gray6} !important; 
    border-radius: 5px;
    padding: 8px;
    :hover {
      border-bottom: 1px solid ${colors.gray5} !important; 
      border-right: 1px solid ${colors.gray5} !important; 

    }
    :active {
      font-weight: 600;
    }
  }
`;

export const FilterHeaderContainer = styled.div `
  font-size: 12px;
  font-weight: 400;

`;