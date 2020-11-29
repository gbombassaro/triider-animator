import React, {useState} from 'react';
import styled from 'styled-components';
import queries from '../utils/queries';

import Home from '../components/Home';
import Login from '../components/Login';
import CreateUser from '../components/CreateUser';
import {useWindowSize} from '../utils/width';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
    min-width: 671px;
    max-width: 671px;
  }
`

const Page = props => {

  const [content, setContent] = useState('');

  const dimensions = useWindowSize();
  const isMobile = dimensions.width > 1016 ? false : true;

  const renderContent = () => {
    if (content === 'login') {
      return <Login />;
    } else if (content === 'createUser') {
      return <CreateUser />;
    } else {
      return <Home setContent={param => setContent(param)} isMobile={isMobile} />;
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

export default Page;