import React from 'react';
import {Column} from '../styled'
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledInput = styled.input`
  width: 100%;
  height: ${({isMobile}) => isMobile ? '40px' : '60px'};
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 0px;
  padding-bottom: 0px;
  border-radius: 5px;
  border-color: #CCCCCC;
  border-style: solid;
  border-width: 1px;
  color: ${colors.primary};
`

const StyledLabel = styled.label`
  font-family: 'Quicksand';
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: #565656;
  margin-bottom: ${({isMobile}) => isMobile ? '8px' : '20px'};
`

const Input = ({onChange, value, label, isMobile}) => {
  return (
    <Column alignItems="flex-start">
      {label && <StyledLabel isMobile={isMobile}>{label}</StyledLabel>}
      <StyledInput isMobile={isMobile} value={value} onChange={onChange} />
    </Column>
  )
}

export default Input;