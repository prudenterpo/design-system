import React from "react";
import PropTypes from "prop-types";
import { ThreeDots } from 'react-loader-spinner';

import { 
  Btn, 
  BtnContainer, 
  BtnRow, 
  BtnRowTextIcon 
} from "./styles";
import colors from "../../styles/colors";

export const Button = ({
  type,
  onClick,
  disabled,
  className,
  isLoading,
  loadingText,
  bgColor,
  color,
  hoverBgColor,
  hoverColor,
  hoverBorder,
  margin,
  border,
  text,
  size,
  isWithIcon,
  icon
}) => {
  return (
    <BtnContainer>
      <Btn
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={className}
        isLoading={isLoading}
        loadingText={loadingText}
        bgColor={bgColor}
        color={color}
        hoverBgColor={hoverBgColor}
        hoverColor={hoverColor}
        hoverBorder={hoverBorder}
        margin={margin}
        border={border}
        size={size}
        isWithIcon={isWithIcon}
        icon={icon}
      >
        <BtnRowTextIcon>
        {!isLoading && (
        <span>{text} </span>
        )}
        {/* {isWithIcon && (
        <span> {icon}</span>
        )} */}
        </BtnRowTextIcon>
        {isLoading && (
          <BtnRow>
            <span>{loadingText}</span>
            <ThreeDots
              height="30"
              width="30"
              radius="9"
              color={colors.gray5}
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true} 
            />
          </BtnRow>
        )}
      </Btn>
    </BtnContainer>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  bgColor: PropTypes.any,
  border: PropTypes.string,
  color: PropTypes.any,
  hoverBgColor: PropTypes.any,
  hoverColor: PropTypes.any,
  hoverBorder: PropTypes.string,
  margin: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  // isWithIcon: PropTypes.bool,
  // icon: PropTypes.element
};

Button.defaultProps = {
  text: "Primary Button",
  size: "regular",
  disabled: false,
  isLoading: false,
  // isWithIcon: false,
  // icon: <FaAngleDoubleRightw />,
  type: "submit",
  loadingText: "Enviando...",
  bgColor: colors.pureGreen,
  border: `1px solid ${colors.pureGreen}`,
  color: colors.white,
  hoverBgColor: colors.cleanGreen,
  hoverColor: colors.white,
  hoverBorder: `1px solid ${colors.cleanGreen}`,
  margin: "10px 0",
  className: '',
};
