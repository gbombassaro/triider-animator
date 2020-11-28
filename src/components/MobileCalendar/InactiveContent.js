import React from 'react';
import Typography from '../Typography';
import {Column, ShiftContainer, Divider} from '../../styled';

const InactiveCard = props => {
  return (
    <Column marginBottom={20} className='shift-card-container'>
      <ShiftContainer disabled className='shift-card'>
        <Typography size={18} color='#565656'>Não disponível</Typography>
      </ShiftContainer>
      <Divider className='Divider'/>
    </Column>
  )
}

export default InactiveCard;