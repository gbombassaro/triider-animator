import React from 'react';
import {Row, ContentContainer} from '../styled';
import Typography from './Typography';
import CreateUserForm from './Forms/CreateUserForm';

const CreateUser = props => {
  return (
    <ContentContainer marginX={16}>
      <Row marginTop={40} marginBottom={40}>
        <Typography size={30}>Criar conta</Typography>
      </Row>
      <CreateUserForm />
    </ContentContainer>
  )
}

export default CreateUser;