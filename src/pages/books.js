import React, {useEffect, useState} from 'react';
import MobileCalendar from '../components/MobileCalendar';
import {BooksContainer} from '../styled';
import {get} from '../connection';

const Books = props => {
  //STATE
  const [userData, setUserData] = useState({});
  const [userEvents, setUserEvents] = useState([]);

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

  return (
    <BooksContainer>
      <MobileCalendar user={userData} events={userEvents} />
    </BooksContainer>
  )
}

export default Books;