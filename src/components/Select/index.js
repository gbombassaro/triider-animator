import React from 'react'; 
import styled from 'styled-components';
import colors from '../../utils/colors';
import {Column} from '../../styled';
import {StyledLabel} from '../../styled/typography';

const StyledSelect = styled.select`
  width: 100%;
  height: 42px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 5px;
  font-family: 'Quicksand';
  font-size: 12px;
  color: ${colors.primary};
  text-transform: capitalize;
  background-color: ${colors.white};
  border-color: #CCCCCC;
`

const Select = ({options, onChange, isMobile, warning, label}) => {

  const handleChange = ({target}) => {
    onChange(target.value);
  }

  return (
    <Column alignItems='flex-start'>
      {label && <StyledLabel isMobile={isMobile} warning={warning}>{label}</StyledLabel>}
      <StyledSelect onChange={handleChange}>
        {options.map(option => <option value={option.id}>{option.label}</option>)}
      </StyledSelect>
    </Column>
  )
}

export default Select;