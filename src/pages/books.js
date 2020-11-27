import React from 'react';
import MobileCalendar from '../components/MobileCalendar';
import {BooksContainer} from '../styled';
import data from '../usermock.json';

const Books = props => {
  return (
    <BooksContainer>
      <MobileCalendar data={data} />
    </BooksContainer>
  )
}

export default Books;