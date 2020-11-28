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
  text-align: ${({textAlign}) => textAlign ? textAlign : 'center'};
  margin-top: ${({marginTop}) => marginTop ? marginTop : '0px'};
  margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : '0px'};
`

const Typography = ({children, size, bold, color, textAlign, marginTop, marginBottom}) => {
  return <StyledP size={size} bold={bold} color={color} textAlign={textAlign} marginTop={marginTop} marginBottom={marginBottom}>{children}</StyledP>;
}

export default Typography;