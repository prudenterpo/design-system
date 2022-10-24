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
    span {
      display: inline-block;
      vertical-align: middle;
      margin: 3px;
    svg {
      color: ${colors.darkestGreen};
      font-size: 0.8rem;
    }
  }
    tr:nth-child(1) {
      height: 50px;
      background-color: ${colors.gray5};
      box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.4) 0px 0px 1px 0px;
    }
    tr:nth-child(2) {
      background-color: ${colors.white};
      box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.4) 0px 0px 1px 0px;
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
  a {
    height: 10px;
    margin: 8px 4px 4px 4px;
    font-weight: 500;
    border-bottom: 1px solid ${colors.gray6} !important; 
    border-right: 1px solid ${colors.gray6} !important; 
    border-radius: 5px;
    padding: 1px;
    font-size: 1.2rem;
    color: ${colors.pureGreen};
   
    :hover {
      border-bottom: 1px solid ${colors.gray5} !important; 
      border-right: 1px solid ${colors.gray5} !important; 
    }
    :active {
      font-weight: 600;
    }
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
  font-size: 0.7rem;
  font-weight: 500;
  color: ${colors.gray1};
`;

export const PaginationContainer = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 30px 5px 10px auto;  
  div:nth-child(1) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.8rem;
    margin: 0 10px 0 auto;
    span {
      margin: 0 5px 0 0;
    }
    input {
      width: 40px;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 5px 5px 5px 10px;
      border-bottom: 1px solid ${colors.gray6} !important; 
      border-right: 1px solid ${colors.gray6} !important; 
      border-radius: 5px;
    }
  } 
  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.8rem;
    margin: 0 10px 0 10px;
    span {
      margin: 0 5px 0 0;
    }
    select {
      width: 60px;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 5px 5px 5px 10px;
      border-bottom: 1px solid ${colors.gray6} !important; 
      border-right: 1px solid ${colors.gray6} !important; 
      border-radius: 5px;
    }
  } 
  div:nth-child(3) {
   
    font-size: 0.8rem;
    margin: 0 20px 0 10px;
    span {
      display: inline-block;
      vertical-align: middle;
      font-size: 0.85rem;
      font-weight: 500;
    }
    button {
      padding: 0 6px 0 6px;
      :active {
        opacity: 0.4;
      }
    }
    svg {
    color: ${colors.pureGreen};
    font-size: 1.3rem;
    display: inline-block;
    vertical-align: middle;
    }
    
  } 
`;