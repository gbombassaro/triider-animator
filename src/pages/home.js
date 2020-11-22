import React from 'react';
import styled from 'styled-components';
import Button from '../styled/Button';
import Typography from '../styled/Typography';
import {Column, Row} from '../styled';
import queries from '../utils/queries';
import colors from '../utils/colors'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const ContentContainer = styled.div`
  z-index: 1;
  position: absolute;
  width: calc(100vw - 80px);
  height: 100vh;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${queries.lg}) {
    width: unset;
    position: unset;
    display: flex;
    z-index: 0;
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
  return (
    <Container>
      <ImageContainer>
        <LinearMask />
        <ContentContainer>
          <Column marginTop={100}>
            <Typography>Gerenciador de eventos para animadores de festas</Typography>
          </Column>
          <Column>
            <Row marginBottom={20}>
              <Button buttonColor={colors.white} fontColor={colors.secondary}>Criar conta</Button>
            </Row>
            <Row marginBottom={40}>
              <Button variant='outlined' buttonColor={colors.white} fontColor={colors.white}>Entrar</Button>
            </Row>
            <Row marginBottom={20}>
              <Typography>Desafio Front end Triider</Typography>
            </Row>
          </Column>
        </ContentContainer>
      </ImageContainer>
    </Container>
  )
}

export default Home;