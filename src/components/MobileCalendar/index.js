import React from 'react';
import styled from 'styled-components';
import {find} from 'lodash';
import Typography from '../Typography';
import {Row} from '../../styled';
import colors from '../../utils/colors';
import {parseCompleteDate} from '../../utils/parser';

import InactiveCard from './InactiveContent';
import BookedCard from './BookedContent';
import ActiveContent from './ActiveContent';

const shiftsModel = [
  { id: "morning", label: "Manhã" },
  { id: "afternoon", label: "Tarde" },
  { id: "night", label: "Noite" }
];

const MobilePanel = styled.div`
  min-width: calc(80% - 20px - 32px);
  height: calc(100% - 20px - 32px);
  background: ${colors.white};
  border-radius: 5px;
  padding: 10px;
`

const Centralizer = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  min-width: 260px;
  max-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
  &:first-child {
    margin-left: 64px;
  }
`

const MobileCalendar = ({events, daysOfMonth, availableShifts}) => {

  const Day = ({date, title}) => {
    return (
      <Container>
        <Typography textAlign='left' marginBottom={16}>{title}</Typography>
        <MobilePanel>
          {shiftsModel.map(entry => {
            //verifica inatividade do cartão (usuário marcou como indisponível)
            const isActive = find(availableShifts, {id: entry.id});
            //verifica se tem agendamento na API
            const isBooked = find(events, {date: date, day_shift: entry.id});
            if (!isActive) return <InactiveCard />
            if (isBooked) return <BookedCard content={isBooked} />
            return <ActiveContent content={entry.label} />
          })}
        </MobilePanel>
      </Container>
    )
  }

  return (
    <Centralizer>
      <Row overflowX='scroll' height='100%' alignItems='center' justifyContent='flex-start'>
        {daysOfMonth.map(entry => <Day title={parseCompleteDate(entry.originalDate)} date={entry.date} />)}
      </Row>
    </Centralizer>
  )
}

export default MobileCalendar;