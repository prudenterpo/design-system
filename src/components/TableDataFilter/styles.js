import styled from 'styled-components';

import colors from '../../styles/colors';
// import { Row } from '../../../utilities/grid';

export const PageContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  input {
      border: none;
  }
  margin: -50px auto 10px;
  padding: 0 30px;
  flex-direction: column;
  max-width: 1000px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 5px 60px;
  div:first-child {
    margin-right: 30px;
  }
`;

export const Title = styled.h3`
  color: ${colors.gray3};
  margin: 40px auto 20px 0;
  font-size: 1.6rem;
`;

// export const CardsWrapper = styled(Row)`
//   flex-wrap: wrap;
//   margin: 30px auto 40px;
// `;

export const HeaderEditor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px 15px;
  width: 100%;
  input {
    color: ${colors.gray1};
    font-size: 1.2rem;
    font-weight: 600;
    border: none;
    width: 400px;
    &::placeholder {
      color: ${colors.gray4};
      font-size: 0.9rem;
    }
  }
`;

export const TableCard = styled.div`
  padding: 20px;
  margin-bottom: 30px;
  background-color: ${colors.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  border-radius: 15px;
`;

export const HeaderBtn = styled.div `
  .show-btn {
    opacity: 0; 
    cursor: default;
  }
  button {
    font-size: 0.8rem;
    margin: 15px 25px 30px 10px;
  }
 
`;

export const EditorFooter = styled.div`
  color: ${colors.gray4};
  font-size: 0.8rem;
  margin: 10px auto 20px 0;
`;

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


