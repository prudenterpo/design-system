import styled from 'styled-components';
import colors from '../../../styles/colors';

export const TablePagination = styled.div `
display: flex;
width: 100%;
justify-content: flex-end;
align-items: center;
margin-top: 20px;
`;

export const PaginationItem = styled.div `
margin-left: 10px;
padding-top: 3px;
width: 20px;
height: 20px;
font-size: 0.7rem;
color: ${colors.gray2};
border-radius: 50%;
align-items: center;
text-align: center;
justify-content: center;

&.page-disabled {
  opacity: 0.2;
}

&.active {
  background-color: ${colors.cleanGreen2};
  color: ${colors.white};
  font-weight: 600;
}

button {
  cursor: pointer;
  &.active:hover {
    background-color: ${colors.pureGreen};
    color: ${colors.white};
    font-weight: 600;
  }
  &:hover {
    font-size: 0.8rem;
    font-weight: 600;
  }
}
`;

export const ArrowsIcon = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;

  &.btn-disabled {
    opacity: 0.2;
  }

  svg {
    color: ${colors.pureGreen};
    margin-left: 10px;
  }
`;
