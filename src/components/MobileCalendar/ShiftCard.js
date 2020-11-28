import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';
import {parseShifts} from '../../utils/parser';
import colors from '../../utils/colors';

const ShiftContainer = styled.div`
  width: 100%;
  height: calc(100% / 3 - 20px);
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({isActive, booked}) => !booked ? isActive ? 'transparent' : '#C4C4C4' : colors.primary};
  &:first-child {
    margin-top: 0px;
  }
`

const Divider = styled.div`
  width: 100%;
  height: 10px;
  background-color: #E9E9E9;
  border-radius: 20px;
  &:last-child {
    display: none;
  }
`

const ShiftCard = ({isActive, booked, shift}) => {

  const renderContent = () => {
    if (isActive) return <Typography size={18} color='#E9E9E9'>{parseShifts(shift)}</Typography>;
    if (booked) return <Typography>{booked.name}</Typography>;
    return <Typography>Não disponível</Typography>;
  }

  return (
    <React.Fragment>
      <ShiftContainer>{renderContent}</ShiftContainer>
      <Divider />
    </React.Fragment>
  )
}

export default ShiftCard;