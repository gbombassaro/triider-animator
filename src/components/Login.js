import React, {useState} from 'react';
import {find} from 'lodash';
import Input from './Input';
import Button from '../styled/Button';
import {Panel} from '../styled';
import {get} from '../connection';

const Login = props => {

  const [data, setData] = useState({email: '', password: ''});
  const [warning, setWarning] = useState(false);

  const authenticate = content => {
    const user = find(content, item => item.email === data.email);
    const passwordIsRight = user && user.password === data.password;
    if (!user || !passwordIsRight) setWarning(true);
    else window.location.assign('/books');
  }

  const fetchAPI = async () => {
    const payload = await get('users');
    authenticate(payload);
  }

  return (
    <Panel>
      <Input isMobile={true} warning={warning} label="Email" onChange={param => setData({email: param, password: data.password})} />
      <Input isMobile={true} warning={warning} type='password' label="Senha" onChange={param => setData({email: data.email, password: param})}/>
      <Button size={50} onClick={() => fetchAPI()}>Entrar</Button>
    </Panel>
  )
}

export default Login;