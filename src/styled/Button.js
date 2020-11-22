import styled from 'styled-components';
import React from 'react';
import colors from '../utils/colors'

const ButtonTypography = styled.span`
  font-size: ${({size}) => size ? size : '20px'};
  line-height: ${({size}) => size ? size + '2.5px' : '22.5px'};
  font-family: 'Quicksand';
  font-weight: ${({bold}) => bold ? '700' : '400'};
  color: #ffffff;
`

const PrimaryButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  padding-left: 40px;
  padding-right: 40px;
  height: ${({size}) => size ? size : '60px'};
  width: max-content;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

const Button = ({bold, children, variant, size}) => {
  switch(variant) {
    case 'primary':
      return (
        <PrimaryButton size={size}>
          <ButtonTypography size={size} bold={bold}>
            {children}
          </ButtonTypography>
        </PrimaryButton>
      )
  }
}

Button.defaultProps = {
  variant: 'primary'
}

export default Button;