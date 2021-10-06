import { useState, useEffect } from 'react'
import styled from 'styled-components';
import Body from './components/Body';
import Jumbotron from './components/Jumbotron';
import AppContainer from './components/Styles/AppStyled';
import GlobalStyle from './components/Styles/GlobalStyled';

function App() {

  return (
    <AppContainer>
      <GlobalStyle />
      <Jumbotron />
      <Body />
    </AppContainer>
  );
}

export default App;
