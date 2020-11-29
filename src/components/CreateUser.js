import React from 'react';
import {Row, ContentContainer} from '../styled';
import Typography from './Typography';
import CreateUserForm from './Forms/CreateUserForm';
import {send} from '../connection'

const CreateUser = props => {

  const newUser = async params => {
    const url = 'users';
    await send(url, params)
      .then(payload => window.location.assign('/'))
      .catch(e => console.error(e));
  }

  return (
    <ContentContainer marginX={16}>
      <Row marginTop={40} marginBottom={40}>
        <Typography size={30}>Criar conta</Typography>
      </Row>
      <CreateUserForm createUserAction={param => newUser(param)} />
    </ContentContainer>
  )
}

export default CreateUser;