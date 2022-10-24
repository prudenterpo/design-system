import styled from 'styled-components';
import colors from '../../styles/colors';

export const InputSpan = styled.span `
  input {
    border-bottom: 1px solid ${colors.gray5};
    padding: 2px;
    ::placeholder {
      font-size: 0.7rem;
      font-weight: 500;
      color: ${colors.gray1};
    }
  }
`;