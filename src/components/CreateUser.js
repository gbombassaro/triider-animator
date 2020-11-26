import React, {useState} from 'react';
import {Panel, Row} from '../styled';
import Button from './Button';
import Input from './Input';
import DaysOfWeek from './DaysOfWeek';
import Shifts from './Shifts';

const CreateUser = props => {

  const [content, setContent] = useState(0);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    category: '',
    week_days: [],
    day_shifts: [],
    price: null
  })

  const renderFirstContent = () => {
    return (
      <React.Fragment>
        <Input 
          isMobile={true}
          // warning={warning}
          label="Qual o seu nome?"
          onChange={param => setData({...data, name: param})}
        />
        <Input 
          isMobile={true}
          // warning={warning}
          label="E seu email?"
          onChange={param => setData({...data, email: param})}
        />
        <Input 
          isMobile={true}
          // warning={warning}
          label="Crie uma senha"
          onChange={param => setData({...data, password: param})}
        />
        <Button variant='gradient' size={50} onClick={() => setContent(1)}>Avançar</Button>
      </React.Fragment>
    )
  }

  const renderSecondContent = () => {
    return (
      <React.Fragment>
        <DaysOfWeek />
        <Shifts />
        <Row marginTop={30}>
          <Input 
            isMobile={true}        
            label="Qual o seu preço?"
            onChange={param => setData({...data, price: param})}
          />
        </Row>
        <Row marginTop={30}>
          <Button variant='gradient' size={50} onClick={() => setContent(1)}>Criar Conta</Button>
        </Row>
      </React.Fragment>
    )
  }

  return <Panel>{content === 0 ? renderFirstContent() : renderSecondContent()}</Panel>;
}

export default CreateUser;