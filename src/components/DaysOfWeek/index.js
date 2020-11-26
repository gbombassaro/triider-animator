import React, {useState} from 'react';
import {find} from 'lodash';
import DayButton from './DayButton';
import {Row, Column} from '../../styled'
import {StyledLabel} from '../../styled/typography';

const DaysOfWeek = props => {

  const [items, setSelected] = useState([
    {
      id: "monday",
      label: "S",
      selected: false,
    },
    {
      id: "tuesday",
      label: "T",
      selected: false,
    },
    {
      id: "wednesday",
      label: "Q",
      selected: false,
    },
    {
      id: "thursday",
      label: "Q",
      selected: false,
    },
    {
      id: "friday",
      label: "S",
      selected: false,
    },
    {
      id: "saturday",
      label: "S",
      selected: false,
    },
    {
      id: "sunday",
      label: "D",
      selected: false,
    },
  ]);

  const handleClick = id => {
    let item = find(items, {id: id});
    if (item.selected) {
      item.selected = false;
      setSelected([...items]);
    } else {
      item.selected = true;
      setSelected([...items])
    }
  }

  return (
    <Column marginTop={30} alignItems='flex-start'>
      <StyledLabel>Selecione os dias que trabalhará?</StyledLabel>
      <Row justifyContent='flex-start'>
        {items.map(entry => <DayButton key={entry.id} selected={entry.selected} content={entry} onClick={handleClick}/>)}
      </Row>
    </Column>
  )
}

export default DaysOfWeek;