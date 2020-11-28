import React, {useState} from 'react';
import {find} from 'lodash';
import {Row, ContentContainer} from '../styled';
import Typography from './Typography';
import LoginForm from './Forms/LoginForm';
import {get} from '../connection';

const Login = props => {

  const [fieldError, setFieldError] = useState(false);

  const authenticate = (payload, localData) => {
    const user = find(payload, item => item.email === localData.email);
    const passwordIsRight = user && user.password === localData.password;
    if (!user || !passwordIsRight) setFieldError(true);
    else {
      setFieldError(false);
      localStorage.setItem('triider/userId', user.id);
      window.location.assign(`/books`);
    }
  }

  const getUsers = async (localData) => {
    const payload = await get('users');
    authenticate(payload, localData);
  }

  return (
    <ContentContainer marginX={16} >
      <Row marginTop={40} marginBottom={40}>
        <Typography size={30}>Entrar</Typography>
      </Row>
      <LoginForm loginAction={getUsers} fieldError={fieldError} />
    </ContentContainer>
  )
}

export default Login;