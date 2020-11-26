import React from 'react';
import {Column} from '../styled'
import {StyledLabel} from '../styled/typography';
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledInput = styled.input`
  width: calc(100% - 24px);
  height: ${({isMobile}) => isMobile ? '40px' : '60px'};
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 0px;
  padding-bottom: 0px;
  border-radius: 5px;
  border-color: ${({warning}) => warning ? 'red' : '#CCCCCC'};
  border-style: solid;
  border-width: 1px;
  color: ${colors.primary};
  margin-bottom: 8px;
`

const Input = ({onChange, value, label, type, isMobile, warning}) => {

  const handleChange = ({target}) => {
    onChange(target.value);
  }

  return (
    <Column alignItems="flex-start">
      {label && <StyledLabel isMobile={isMobile} warning={warning}>{label}</StyledLabel>}
      <StyledInput isMobile={isMobile} warning={warning} value={value} onChange={handleChange} type={type} />
    </Column>
  )
}

export default Input;