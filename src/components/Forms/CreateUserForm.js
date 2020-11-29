import React, {useState} from 'react';
import {Panel, Row} from '../../styled';
import Button from '../Button';
import Input from '../Input';
import DaysOfWeek from '../DaysOfWeek';
import Shifts from '../Shifts';
import Select from '../Select';
// import {send} from '../connection';

const CreateUser = props => {

  const [content, setContent] = useState(0);
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    category: '',
    week_days: [],
    day_shifts: [],
    price: null
  })

  const categories = [
    {
      id: 'magician',
      label: 'Mágico'
    },
    {
      id: 'tester',
      label: 'Tester'
    },
    {
      id: 'dev',
      label: 'Desenvolvedor'
    },
    {
      id: 'front',
      label: 'Desenvolvedor front'
    },
    {
      id: 'backend',
      label: 'Desenvolvedor backend'
    }
  ];

  const handleChange = (value, id) => {
    setState({...state, [id]: value})
  }

  const renderFirstContent = () => {
    return (
      <React.Fragment>
        <Input 
          isMobile={true}
          // warning={warning}
          label="Qual o seu nome?"
          onChange={param => handleChange(param, 'name')}
        />
        <Input 
          isMobile={true}
          // warning={warning}
          label="E seu email?"
          onChange={param => handleChange(param, 'email')}
        />
        <Input 
          isMobile={true}
          // warning={warning}
          label="Crie uma senha"
          onChange={param => handleChange(param, 'password')}
        />
        <Button variant='gradient' size={50} onClick={() => setContent(1)}>Avançar</Button>
      </React.Fragment>
    )
  }

  const renderSecondContent = () => {
    return (
      <React.Fragment>
        <Select options={categories} label='Selecione sua categoria' onChange={param => handleChange(param, 'category')} />
        <DaysOfWeek onChange={param => handleChange(param, 'week_days')} />
        <Shifts onChange={param => handleChange(param, 'day_shifts')} />
        <Row marginTop={30}>
          <Input 
            isMobile={true}        
            label="Qual o seu preço?"
            onChange={param => handleChange(param, 'price')}
          />
        </Row>
        <Row marginTop={30}>
          <Button variant='gradient' size={50} onClick={() => console.log('Criar usuário')}>Criar Conta</Button>
        </Row>
      </React.Fragment>
    )
  }

  return <Panel>{content === 0 ? renderFirstContent() : renderSecondContent()}</Panel>;
}

export default CreateUser;