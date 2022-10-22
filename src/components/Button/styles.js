import styled from "styled-components";

import colors from "../../styles/colors";

export const BtnContainer = styled.div`
  display: block;
  width: '100%';
`;

export const Btn = styled.button`

  width: ${(props) => 
    props.size === 'small' ? '160px'
    : props.size === 'regular' ? '170px'
    : props.size === 'large' ? '180px'
    : props.size === 'full width' ? '100%'
    : '180px'};

  height: ${(props) => 
    props.size === 'small' ? '40px'
    : props.size === 'regular' ? '50px'
    : props.size === 'large' ? '60px'
    : props.size === 'full width' ? '50px'
    : '20px'};

  font-size: ${ (props) => 
    props.size === 'small' ? '0.75rem'
    : props.size === 'regular' ? '0.8rem'
    : props.size === 'large' ? '0.85rem'
    : props.size === 'full width' ? '0.8rem'
    : '0.8rem'};
    
  background-color: ${(props) => props.bgColor || colors.pureGreen};
  ${"" /* height: ${(props) => props.height || '40px'}; */}
  border-radius: 50px;
  border: ${(props) =>
    props.border || "1px solid" + colors.pureGreen};
  ${"" /* outline: none; */}
  color: ${(props) => props.color || colors.white};
  font-weight: 600;
  margin: ${(props) => props.margin || "10px 0"};
  transition: 0.15s;

  &:hover:enabled {
    background-color: ${(props) => props.hoverBgColor || colors.cleanGreen};
    border: ${(props) => props.hoverBorder || "1px solid" + colors.cleanGreen};
    color: ${(props) => props.hoverColor};
  }
  &:disabled {
    ${'' /* cursor: initial;
    border: initial; */}
    opacity: 0.6;
  }
  &:active {
    opacity: 0.6 !important;
  }
`;

export const BtnRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BtnRowTextIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin: 0 5px;
  }
`;
