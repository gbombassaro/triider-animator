import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Button from '../components/Button';
import Calendar from '../components/Calendar';
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
const ButtonContainer = styled.div`
  max-width: 300px;
  width: 100%;
  margin-top: 32px;
`

const Books = props => {
  //STATE
  const [userEvents, setUserEvents] = useState([]);
  const [dialogStatus, setDialog] = useState(false);

  //GET USER ID
  const userId = localStorage.getItem('triider/userId');

  //LISTENER
  useEffect(() => {
    getUserData();
    getUserEvents();
  }, [userId]);

  const getUserData = async () => {
    const url = `users/${userId}`;
    await get(url)
      .then(payload => props.setNewConfig(payload))
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

  const {daysOfMonth, availableShifts, availableDays} = props.configs;

  return (
    <BooksContainer>
      <Calendar events={userEvents} availableDays={availableDays} daysOfMonth={daysOfMonth} availableShifts={availableShifts} />
      <ButtonContainer>
        <Button variant='outlined' buttonColor={colors.white} size={50} onClick={() => setDialog(true)}>Adicionar Evento</Button>
      </ButtonContainer>
      <Dialog title='Cadastrar evento' open={dialogStatus} onClose={() => setDialog(false)}>
        <CreateEventForm availableDays={availableDays} daysOfMonth={daysOfMonth} availableShifts={availableShifts} isMobile={true} createAction={param => newEvent(param)} />
      </Dialog>
    </BooksContainer>
  )
}

const mapDispatcherToProps = dispatchEvent => {
  return {
    setNewConfig: data => dispatchEvent({type: 'SET_NEW_CONFIG', payload: data})
  }
}

const mapStateToProps = state => {
  return {configs: state.configs};
}

export default connect(mapStateToProps, mapDispatcherToProps)(Books);