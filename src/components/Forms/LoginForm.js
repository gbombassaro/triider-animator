import React, {useState} from 'react';
import Input from '../Input';
import Button from '../Button';
import {Panel} from '../../styled';

const Login = ({loginAction, fieldError}) => {

  const [data, setData] = useState({email: '', password: ''});

  const handleClick = () => {
    loginAction(data);
  }

  return (
    <Panel>
      <Input isMobile={true} warning={fieldError} label="Email" onChange={param => setData({email: param, password: data.password})} />
      <Input isMobile={true} warning={fieldError} type='password' label="Senha" onChange={param => setData({email: data.email, password: param})}/>
      <Button variant='gradient' size={50} onClick={handleClick}>Entrar</Button>
    </Panel>
  )
}

export default Login;