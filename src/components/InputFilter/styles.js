import styled from "styled-components";
import colors from '../../styles/colors';

export const InputFilterContainer = styled.div `
  display: flex;
  justify-content: end;
  margin: 5px 10px 5px auto;
  input {
  border-bottom: 1px solid ${colors.gray5};
  font-size: 0.8rem;
  color: ${colors.gray2};
  height: 30px;
  width: 220px;
  padding: 10px;
  }
  svg {
    height: 20px;
    width: 20px;
    margin: 4px 0 0 -24px;
    color: ${colors.gray2}; 
   
  }
`;