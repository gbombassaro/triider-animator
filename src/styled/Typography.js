import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  font-size: ${({size}) => size ? size : '20px'};
  line-height: ${({size}) => size ? size + '2.5px' : '22.5px'};
  font-family: 'Quicksand';
  font-weight: ${({bold}) => bold ? '700' : '400'};
  color: ${({color}) => color ? color : '#ffffff'};
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
`

const Typography = ({children}) => {
  return <StyledP>{children}</StyledP>;
}

export default Typography;