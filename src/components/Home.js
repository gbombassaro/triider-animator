import React from 'react';
import {Row, Column, ContentContainer} from '../styled';
import Button from './Button';
import Typography from './Typography';
import colors from '../utils/colors';

const Home = ({setContent, isMobile}) => {
  return (
    <ContentContainer>
      <Row marginTop={100}>
        <Typography size={24} color={isMobile ? colors.white : colors.secondary}>Gerenciador de eventos para animadores de festas</Typography>
      </Row>
      <Column>
        <Row marginBottom={20}>
          <Button buttonColor={isMobile ? colors.white : colors.secondary} fontColor={isMobile ? colors.secondary : colors.white} onClick={() => setContent('createUser')}>Criar conta</Button>
        </Row>
        <Row marginBottom={40}>
          <Button variant='outlined' buttonColor={isMobile ? colors.white : colors.secondary} fontColor={isMobile ? colors.white : colors.secondary} onClick={() => setContent('login')}>Entrar</Button>
        </Row>
        <Row marginBottom={20}>
          <Typography size={18}>Desafio Front end Triider</Typography>
        </Row>
      </Column>
    </ContentContainer>
  )
}

export default Home;