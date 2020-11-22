import styled from 'styled-components';
import React from 'react';
import colors from '../utils/colors';
import queries from '../utils/queries';

export const ButtonTypography = styled.span`
  font-size: ${({size}) => size ? size : '20px'};
  line-height: ${({size}) => size ? size + '2.5px' : '22.5px'};
  font-family: 'Quicksand';
  font-weight: ${({bold}) => bold ? '700' : '400'};
  color: ${({color}) => color ? color : '#ffffff'};
  margin-left: 40px;
  margin-right: 40px;
`

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  background-color: ${({color}) => color ? color : colors.primary};
  height: ${({size}) => size ? size : '60px'};
  width: ${({fullWidth}) => fullWidth ? '100%' : 'max-content'};
  border-radius: 5px;
  cursor: pointer;
  appearance: unset;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: ${queries.md}) {
    width: 100%;
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
  height: ${({size}) => size ? size : '60px'};
  width: ${({fullWidth}) => fullWidth ? '100%' : 'max-content'};
  border-radius: 5px;
  cursor: pointer;
  appearance: unset;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: ${queries.md}) {
    width: calc(100% - 1px);
  }
`

const Button = ({bold, children, variant, size, fontColor, buttonColor, onClick}) => {
  switch(variant) {
    case 'default':
      return (
        <PrimaryButton size={size} color={buttonColor} onClick={onClick}>
          <ButtonTypography size={size} bold={bold} color={fontColor}>
            {children}
          </ButtonTypography>
        </PrimaryButton>
      )
    case 'outlined':
      return (
        <OutlinedButton size={size} color={buttonColor} onClick={onClick}>
          <ButtonTypography size={size} bold={bold} color={fontColor ? fontColor : colors.white}>
            {children}
          </ButtonTypography>
        </OutlinedButton>
      )
  }
}

Button.defaultProps = {
  variant: 'default'
}

export default Button;