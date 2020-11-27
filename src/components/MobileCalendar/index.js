import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Typography from '../Typography';
import {Row, Column} from '../../styled';
import colors from '../../utils/colors';

import {parseShifts} from '../../utils/parser';
import {startOfMonth, endOfMonth, eachDayOfInterval} from 'date-fns';

const now = new Date();
const firstDayMonth = startOfMonth(now);
const lastDayMonth = endOfMonth(now);
const days = eachDayOfInterval({start: firstDayMonth, end: lastDayMonth});
const shifts = ["morning", "afternoon", "night"];

console.log(firstDayMonth, lastDayMonth, days);

const MobilePanel = styled.div`
  min-width: calc(80% - 20px - 32px);
  height: calc(100% - 20px - 32px);
  background: ${colors.white};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 32px;
  margin-left: 32px;
`

const ShiftContainer = styled.div`
  width: 100%;
  height: calc(100% / 3 - 20px);
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  /* background-color: ${colors.primary}; */
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

const Centralizer = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
`

const ShiftCard = ({children}) => {
  return (
    <React.Fragment>
      <ShiftContainer>
        <Typography size={18} color='#E9E9E9'>{parseShifts(children)}</Typography>
      </ShiftContainer>
      <Divider/>
    </React.Fragment>
  )
}

const Day = props => {
  return (
    <React.Fragment>
      <Typography></Typography>
      <MobilePanel>
        {shifts.map(entry => <ShiftCard>{entry}</ShiftCard> )}
      </MobilePanel>
    </React.Fragment>
  )
}

const MobileCalendar = ({data}) => {
  return (
    <Centralizer>
      <Row overflowX='scroll' height='100%' alignItems='center' justifyContent='flex-start'>
        {days.map(entry => <Day></Day>)}
      </Row>
    </Centralizer>
    // <Button variant='outlined' buttonColor={colors.white} size={50} onClick={() => console.log('clique')}>Adicionar Evento</Button>
  )
}

export default MobileCalendar;