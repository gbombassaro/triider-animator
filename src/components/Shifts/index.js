import React, {useState} from 'react';
import styled from 'styled-components';
import {find} from 'lodash';
import {Row, Column} from '../../styled';
import {StyledLabel} from '../../styled/typography';
import Button from '../Button';
import colors from '../../utils/colors';

const ButtonContainer = styled.div`
  margin-right: 8px;
  margin-bottom: 8px;
  &:last-child {
    margin-right: unset;
  }
`

const Shifts = props => {

  const [items, setSelected] = useState([
    {
      id: "morning",
      label: "Manhã",
      selected: false,
    },
    {
      id: "afternoon",
      label: "Tarde",
      selected: false,
    },
    {
      id: "night",
      label: "Noite",
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

    let shiftsIds = [];
    items.map(entry => entry.selected === true && shiftsIds.push(entry.id));
    props.onChange(shiftsIds);
  }

  return (
    <Column marginTop={30} alignItems='flex-start'>
      <StyledLabel>Selecione os turnos em que trabalhará?</StyledLabel>
      <Row wrap justifyContent='flex-start'>
        {items.map(entry => (
          <ButtonContainer>
            <Button key={entry.id} disableFullWidth size={40} buttonColor={entry.selected ? colors.primary : colors.disabled} onClick={() => handleClick(entry.id)}>{entry.label}</Button>
          </ButtonContainer>
        ))}
      </Row>
    </Column>
  )
}

export default Shifts;