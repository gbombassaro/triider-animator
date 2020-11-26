import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../styled/Button';
import Typography from '../components/Typography';
import Login from '../components/Login';
import CreateUser from '../components/CreateUser';
import {Column, Row} from '../styled';
import queries from '../utils/queries';
import colors from '../utils/colors'

const parseNumber = number => {
  return `${number}px`
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const ContentContainer = styled.div`
  z-index: 1;
  position: absolute;
  width: ${({marginX}) => marginX ? `calc(100vw - ${marginX * 2}px)` : 'calc(100vw - 80px)'};
  height: 100vh;
  padding-left: ${({marginX}) => marginX ? parseNumber(marginX) : '40px'};
  padding-right: ${({marginX}) => marginX ? parseNumber(marginX) : '40px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${queries.lg}) {
    width: calc(100% - 50px - 20px);
    position: unset;
    display: flex;
    z-index: 0;
    padding-right: 50px;
    padding-left: 50px;
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/home-image.jpg");
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  @media (min-width: ${queries.lg}) {
    background-position: left top;
    justify-content: flex-start;
    align-items: center;
  }
`

const LinearMask = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(237,125,194);
  background: linear-gradient(180deg, rgba(237,125,194, 0.8) 0%, rgba(153,60,255, 0.8) 100%);
  @media (min-width: ${queries.lg}) {
    max-width: 671px;
  }
`

const Home = props => {

  const [content, setContent] = useState('');

  const renderHome = () => {
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
  
  const renderLogin = () => {
    return (
      <ContentContainer marginX={16} >
        <Row marginTop={40} marginBottom={40}>
          <Typography size={30}>Entrar</Typography>
        </Row>
        <Login />
      </ContentContainer>
    )
  }
  
  const renderCreateUser = () => {
    return (
      <ContentContainer marginX={16}>
        <Row marginTop={40} marginBottom={40}>
          <Typography size={30}>Criar conta</Typography>
        </Row>
        <CreateUser/>
      </ContentContainer>
    )
  }

  const renderContent = () => {
    switch(content) {
      case 'login':
        return renderLogin();
      case 'createUser':
        return renderCreateUser();
      case 'home':
      default:
        return renderHome();
    }
  }

  return (
    <Container>
      <ImageContainer>
        <LinearMask />
        {renderContent()}
      </ImageContainer>
    </Container>
  )
}

export default Home;