import React from 'react';
import Input from './Input';
import Button from '../styled/Button';
import {Panel} from '../styled'

const Login = props => {
  return (
    <Panel>
      <Input isMobile={true} label="Email"/>
      <Input isMobile={true} label="Senha"/>
      <Button size={50}>Entrar</Button>
    </Panel>
  )
}

export default Login;