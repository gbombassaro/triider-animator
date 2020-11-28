import React from 'react';
import styled from 'styled-components';
import {find} from 'lodash';
import Typography from '../Typography';
import ShiftCard from './ShiftCard';
import {Row, Column} from '../../styled';
import colors from '../../utils/colors';
import {parseDate, parseFromAPI} from '../../utils/parser';

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

const MobileCalendar = ({user, events, dates, shifts}) => {

  if (!user) return null;

  const {day_shifts} = user;

  const Day = ({date}) => {
    return (
      <React.Fragment>
        <Typography></Typography>
        <MobilePanel>
          {shifts.map(entry => {
            const isActive = find(day_shifts, entry.id);
            // const isBooked = find(events, event => parse(event.date) === parseDate(date));
            // console.log(events);
            // events.map(event => parseFromAPI(event.date))
            // return <ShiftCard isActive={isActive} booked={isBooked} shift={entry} /> 
          })}
        </MobilePanel>
      </React.Fragment>
    )
  }

  return (
    <Centralizer>
      <Row overflowX='scroll' height='100%' alignItems='center' justifyContent='flex-start'>
        {dates.map(entry => <Day date={entry} />)}
      </Row>
    </Centralizer>
  )
}

export default MobileCalendar;