import React from 'react';
import Typography from '../Typography';
import {Column, ShiftContainer, Divider} from '../../styled';
import colors from '../../utils/colors';

const BookedCard = ({content}) => {
  const {name, address} = content;
  return (
    <Column marginBottom={20} className='shift-card-container'>
      <ShiftContainer color={colors.primary} alignItems='flex-start' justifyContent='flex-start' className='shift-card'>
        <Typography size={20} color={colors.white} bold>{name}</Typography>
        <Typography size={14} color={colors.white}>{address}</Typography>
      </ShiftContainer>
      <Divider className='Divider'/>
    </Column>
  )
}

export default BookedCard;