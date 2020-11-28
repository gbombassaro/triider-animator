import React from 'react';
import Typography from '../Typography';
import {Column, ShiftContainer, Divider} from '../../styled';
import colors from '../../utils/colors';

const ActiveCard = ({content}) => {
  return (
    <Column marginBottom={20} className='shift-card-container'>
      <ShiftContainer color={colors.white} className='shift-card'>
        <Typography size={18} color='rgba(196, 196, 196, 0.3)'>{content}</Typography>
      </ShiftContainer>
      <Divider className='Divider'/>
    </Column>
  )
}

export default ActiveCard;