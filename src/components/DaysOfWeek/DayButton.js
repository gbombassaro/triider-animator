import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import Typography from '../Typography';

const Container = styled.button`
  width: 35px;
  height: 35px;
  background-color: ${({selected}) => selected ? colors.primary : '#EEEEEE'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  margin-right: 4px;
  cursor: pointer;
  &:last-child {
    margin-right: unset;
  }
`

const DayButton = ({content, onClick, selected}) => {
  return (
    <Container onClick={() => onClick(content.id)} selected={selected}>
      <Typography size={14} color={colors.white} bold>{content.label}</Typography>
    </Container>
  )
}

export default DayButton;