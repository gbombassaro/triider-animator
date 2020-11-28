import React, {useState} from 'react';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import {Row, Column} from '../../styled';

const CreateEventForm = ({availableDays, availableShifts, isMobile, createAction}) => {

  const daysForSelect = availableDays.map(entry => { return {id: entry, label: entry} });
  const initalState = {
    date: daysForSelect[0].id,
    day_shift: availableShifts[0].id
  };
  
  const [state, setState] = useState(initalState);

  const handleChange = (value, id) => {
    setState({...state, [id]: value})
  }

  return (
    <Column marginBottom={40}>
      <Row marginBottom={30}>
        <Input
          label='Nome do evento'
          isMobile={isMobile}
          onChange={param => handleChange(param, 'name')}
        />
      </Row>
      <Row marginBottom={30}>
        <Input
          label='Local'
          isMobile={isMobile}
          onChange={param => handleChange(param, 'address')}
        />
      </Row>
      <Row marginBottom={30}>
        <Row width='50%' marginRight={8}>
          <Select
            label='Data'
            options={daysForSelect}
            onChange={param => handleChange(param, 'date')}
          />
        </Row>
        <Row width='50%' marginLeft={8}>
          <Select
            label='Turno'
            options={availableShifts}
            onChange={param => handleChange(param, 'day_shift')}
          />
        </Row>
      </Row>
      <Button variant='gradient' size={50} onClick={() => createAction(state)}>Adicionar Evento</Button>
    </Column>
  )
}

export default CreateEventForm;