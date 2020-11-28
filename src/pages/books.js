import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Button from '../components/Button';
import MobileCalendar from '../components/MobileCalendar';
import Dialog from '../components/Dialog';
import CreateEventForm from '../components/Forms/CreateEvent';
import {get, send} from '../connection';
import colors from '../utils/colors';

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
    const url = `events`;
    const headers = {userId: 1};
    await get(url, headers)
      .then(payload => setUserEvents(payload))
      .catch(e => console.error(e));
  }

  const newEvent = async params => {
    const url = 'events';
    const parsedParams = {...params, user_id: userId};
    await send(url, parsedParams)
      .then(payload => {
        getUserEvents();
        setDialog(false);
      })
      .catch(e => console.error(e));
  }

  if (!userId) return <pre>Usuário não autenticado.</pre>

  const {availableDays, availableShifts} = props.configs;

  return (
    <BooksContainer>
      <MobileCalendar user={userData} events={userEvents} dates={availableDays} shifts={availableShifts} />
      <Button variant='outlined' buttonColor={colors.white} size={50} onClick={() => setDialog(true)}>Adicionar Evento</Button>
      <Dialog title='Cadastrar evento' open={dialogStatus} onClose={() => setDialog(false)}>
        <CreateEventForm availableDays={availableDays} availableShifts={availableShifts} isMobile={true} createAction={param => newEvent(param)} />
      </Dialog>
    </BooksContainer>
  )
}

const mapStateToProps = state => {
  return {configs: state.configs};
}

export default connect(mapStateToProps, null)(Books);