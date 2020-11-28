import React from 'react';
import styled from 'styled-components';
import {find} from 'lodash';
import Button from '../Button';
import Typography from '../Typography';
import ShiftCard from './ShiftCard';
import {Row, Column} from '../../styled';
import colors from '../../utils/colors';
import {parseDate, parseFromAPI} from '../../utils/parser';

import {startOfMonth, endOfMonth, eachDayOfInterval, getUnixTime} from 'date-fns';

const now = new Date();
const firstDayMonth = startOfMonth(now);
const lastDayMonth = endOfMonth(now);
const days = eachDayOfInterval({start: firstDayMonth, end: lastDayMonth});
const shifts = ["morning", "afternoon", "night"];

// console.log(firstDayMonth, lastDayMonth, days);

const MobilePanel = styled.div`
  min-width: calc(80% - 20px - 32px);
  height: calc(100% - 20px - 32px);
  background: ${colors.white};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 32px;
  margin-left: 32px;
`

const Centralizer = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
`

const MobileCalendar = ({user, events}) => {

  if (!user) return null;

  const {day_shifts} = user;

  const Day = ({date}) => {
    return (
      <React.Fragment>
        <Typography></Typography>
        <MobilePanel>
          {shifts.map(entry => {
            const isActive = find(day_shifts, entry);
            // const isBooked = find(events, event => parse(event.date) === parseDate(date));
            // console.log(events);
            events.map(event => parseFromAPI(event.date))
            // return <ShiftCard isActive={isActive} booked={isBooked} shift={entry} /> 
          })}
        </MobilePanel>
      </React.Fragment>
    )
  }

  return (
    <Centralizer>
      <Row overflowX='scroll' height='100%' alignItems='center' justifyContent='flex-start'>
        {days.map(entry => <Day date={entry} />)}
      </Row>
    </Centralizer>
    // <Button variant='outlined' buttonColor={colors.white} size={50} onClick={() => console.log('clique')}>Adicionar Evento</Button>
  )
}

export default MobileCalendar;