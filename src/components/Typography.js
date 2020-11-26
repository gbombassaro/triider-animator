import React from 'react';
import styled from 'styled-components';

const parseNumber = number => {
  return `${number}px`
};

const StyledP = styled.p`
  font-size: ${({size}) => size ? parseNumber(size) : '20px'};
  line-height: ${({size}) => size ? parseNumber(size + 2.5) : '22.5px'};
  font-family: 'Quicksand';
  font-weight: ${({bold}) => bold ? '700' : '400'};
  color: ${({color}) => color ? color : '#ffffff'};
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
`

const Typography = ({children, size, bold, color}) => {
  return <StyledP size={size} bold={bold} color={color}>{children}</StyledP>;
}

export default Typography;