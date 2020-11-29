import React, {useState} from 'react';
import {find} from 'lodash';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import {Row, Column} from '../../styled';

const CreateEventForm = ({availableDays, daysOfMonth, availableShifts, isMobile, createAction}) => {

  //MAPEIA DIAS DISPONÍVEIS E RENDERIZA UMA LISTA PARA O SELECT
  const dateOptions = [];
  daysOfMonth.map(entry => {
    const isAvailable = find(availableDays, {day: entry.day});
    if (isAvailable) dateOptions.push({id: entry.date, label: entry.date});
  })

  const initalState = {
    name: '',
    address: '',
    date: dateOptions[0].id,
    day_shift: availableShifts[0].id
  };
  
  const [state, setState] = useState(initalState);
  const [invalidFields, setInvalidFields] = useState([]);

  const handleChange = (value, id) => {
    setState({...state, [id]: value})
  }

  const validateFields = () => {
    const {name, address, date, day_shift} = state;
    let fields = [];
    if (name.length < 1) fields.push({value: 'name'});
    if (address.length < 1) fields.push({value: 'address'});
    if (date.length < 1) fields.push({value: 'date'});
    if (day_shift.length < 1) fields.push({value: 'day_shift'});
    setInvalidFields(fields);
  }

  const handleClick = () => {
    validateFields();
    if (invalidFields.length = 0) createAction(state);
  }

  return (
    <Column marginBottom={40}>
      <Row marginBottom={30}>
        <Input
          label='Nome do evento'
          isMobile={isMobile}
          onChange={param => handleChange(param, 'name')}
          warning={find(invalidFields, {value: 'name'})}
        />
      </Row>
      <Row marginBottom={30}>
        <Input
          label='Local'
          isMobile={isMobile}
          onChange={param => handleChange(param, 'address')}
          warning={find(invalidFields, {value: 'name'})}
        />
      </Row>
      <Row marginBottom={30}>
        <Row width='50%' marginRight={8}>
          <Select
            label='Data'
            options={dateOptions}
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
      <Button variant='gradient' size={50} onClick={() => handleClick()}>Adicionar Evento</Button>
    </Column>
  )
}

export default CreateEventForm;