import styled from 'styled-components';
import React from 'react';
import colors from '../utils/colors';
import queries from '../utils/queries';

const parseNumber = number => {
  return `${number}px`
};

export const ButtonTypography = styled.span`
  font-size: ${({size}) => size ? parseNumber(size) : '20px'};
  line-height: ${({size}) => size ? parseNumber(size) + '2.5px' : '22.5px'};
  font-family: 'Quicksand';
  font-weight: ${({bold}) => bold ? '700' : '400'};
  color: ${({color}) => color ? color : '#ffffff'};
  margin-left: 20px;
  margin-right: 20px;
`

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  background-color: ${({color}) => color ? color : colors.primary};
  height: ${({size}) => size ? parseNumber(size) : '60px'};
  width: ${({fullWidth, disableFullWidth}) => fullWidth || !disableFullWidth ? '100%' : 'max-content'};
  border-radius: 5px;
  cursor: pointer;
  appearance: unset;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: ${queries.md}) {
    width: ${({disableFullWidth}) => disableFullWidth ? 'max-content' : '100%'};
  }
`

const OutlinedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({color}) => color ? color : colors.primary};
  border-style: solid;
  background-color: unset;
  height: ${({size}) => size ? parseNumber(size) : '60px'};
  width: ${({fullWidth, disableFullWidth}) => fullWidth || !disableFullWidth ? '100%' : 'max-content'};
  border-radius: 5px;
  cursor: pointer;
  appearance: unset;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: ${queries.md}) {
    width: ${({disableFullWidth}) => disableFullWidth ? 'max-content' : 'calc(100% - 1px)'};
  }
`

const GradientButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  background: rgb(237,125,194);
  background: linear-gradient(90deg, rgba(237,125,194,1) 0%, rgba(153,60,255,1) 100%);
  height: ${({size}) => size ? parseNumber(size) : '60px'};
  width: ${({fullWidth, disableFullWidth}) => fullWidth || !disableFullWidth ? '100%' : 'max-content'};
  border-radius: 5px;
  cursor: pointer;
  appearance: unset;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: ${queries.md}) {
    width: ${({disableFullWidth}) => disableFullWidth ? 'max-content' : '100%'};
  }
`

const Button = ({bold, disableFullWidth, children, variant, size, fontSize, fontColor, buttonColor, onClick}) => {
  switch(variant) { 
    case 'outlined':
      return (
        <OutlinedButton disableFullWidth={disableFullWidth} size={size} color={buttonColor} onClick={onClick}>
          <ButtonTypography size={fontSize} bold={bold} color={fontColor ? fontColor : colors.white}>
            {children}
          </ButtonTypography>
        </OutlinedButton>
      )
    case 'gradient':
      return (
        <GradientButton disableFullWidth={disableFullWidth} size={size} color={buttonColor} onClick={onClick}>
          <ButtonTypography size={fontSize} bold={bold} color={fontColor ? fontColor : colors.white}>
            {children}
          </ButtonTypography>
        </GradientButton>
      )
    case 'default':
    default:
      return (
        <PrimaryButton disableFullWidth={disableFullWidth} size={size} color={buttonColor} onClick={onClick}>
          <ButtonTypography size={fontSize} bold={bold} color={fontColor}>
            {children}
          </ButtonTypography>
        </PrimaryButton>
      )
  }
}

Button.defaultProps = {
  variant: 'default',
  disableFullWidth: false
}

export default Button;