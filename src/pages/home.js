import React from 'react';
import styled from 'styled-components';
import Button from '../styled/Button';
import queries from '../utils/queries';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const ContentContainer = styled.div`
  z-index: 1;
  position: absolute;
  @media (min-width: ${queries.lg}) {
    position: unset;
    display: flex;
    z-index: 0;
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
          <Button>Testando</Button>
        </ContentContainer>
      </ImageContainer>
    </Container>
  )
}

export default Home;