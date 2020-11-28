import React from 'react';
import {Row, Column, ContentContainer} from '../styled';
import Button from './Button';
import Typography from './Typography';
import colors from '../utils/colors';

const Home = ({setContent}) => {
  return (
    <ContentContainer>
      <Row marginTop={100}>
        <Typography size={24}>Gerenciador de eventos para animadores de festas</Typography>
      </Row>
      <Column>
        <Row marginBottom={20}>
          <Button buttonColor={colors.white} fontColor={colors.secondary} onClick={() => setContent('createUser')}>Criar conta</Button>
        </Row>
        <Row marginBottom={40}>
          <Button variant='outlined' buttonColor={colors.white} fontColor={colors.white} onClick={() => setContent('login')}>Entrar</Button>
        </Row>
        <Row marginBottom={20}>
          <Typography size={18}>Desafio Front end Triider</Typography>
        </Row>
      </Column>
    </ContentContainer>
  )
}

export default Home;