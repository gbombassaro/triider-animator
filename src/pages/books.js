import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Dialog from '../components/Dialog';
import Input from '../components/Input';
import Select from '../components/Select';
import {Row, Column} from '../styled';
import MobileCalendar from '../components/MobileCalendar';
import {get, send} from '../connection';
import colors from '../utils/colors';

import {parseDate, parseFromAPI} from '../utils/parser';
import {startOfMonth, endOfMonth, eachDayOfInterval, getUnixTime} from 'date-fns';

const now = new Date();
const firstDayMonth = startOfMonth(now);
const lastDayMonth = endOfMonth(now);
const days = eachDayOfInterval({start: firstDayMonth, end: lastDayMonth});

const BooksContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(237,125,194);
  background: linear-gradient(180deg, rgba(237,125,194,1) 0%, rgba(153,60,255,1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Books = props => {
  //STATE
  const [userData, setUserData] = useState({});
  const [userEvents, setUserEvents] = useState([]);
  const [dialogStatus, setDialog] = useState(false);

  //GLOBAL DATA
  const splittedUserId = props.location.pathname.split('/books/')
  const userId = splittedUserId[1];

  //LISTENER
  useEffect(() => {
    getUserData();
    getUserEvents();
  }, [userId]);

  const getUserData = async () => {
    const url = `users/${userId}`;
    await get(url)
      .then(payload => setUserData(payload))
      .catch(e => console.error(e));
  }

  const getUserEvents = async () => {
    const url = `events/${userId}`;
    await get(url)
      .then(payload => setUserEvents([payload]))
      .catch(e => console.error(e));
  }

  const newEvent = async () => {
    const url = 'events';
    const body = {}
    await send(url)
      .then(payload => {
        getUserEvents();
        setDialog(false);
      })
      .catch(e => console.error(e));
  }

  if (!userId) return <pre>Usuário não autenticado.</pre>

  const parsedDays = days.map(entry => {
    return {id: entry, label: parseDate(entry)}
  });
  
  const shifts = [
    { id: "morning", label: "Manhã" },
    { id: "afternoon", label: "Tarde" },
    { id: "night", label: "Noite" }
  ];

  return (
    <BooksContainer>
      <MobileCalendar user={userData} events={userEvents} dates={days} shifts={shifts} />
      <Button variant='outlined' buttonColor={colors.white} size={50} onClick={() => setDialog(true)}>Adicionar Evento</Button>

      <Dialog title='Cadastrar evento' open={dialogStatus} onClose={() => setDialog(false)}>
        <Column marginBottom={40}>
          <Row marginBottom={30}>
            <Input label='Nome do evento' isMobile={true} />
          </Row>
          <Row marginBottom={30}>
            <Input label='Local' isMobile={true} />
          </Row>
          <Row>
            <Row width='50%' marginRight={8}>
              <Select label='Data' options={parsedDays} />
            </Row>
            <Row width='50%' marginLeft={8}>
              <Select label='Turno' options={shifts} />
            </Row>
          </Row>
        </Column>
        <Button variant='gradient' size={50} onClick={() => newEvent(true)}>Adicionar Evento</Button>
      </Dialog>

    </BooksContainer>
  )
}

export default Books;