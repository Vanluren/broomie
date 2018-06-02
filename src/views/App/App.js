import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import logo from '../../logo.svg';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader className="App-header">
          <AppLogo src={logo} className="App-logo" alt="logo" />
          <AppTitle className="App-title">Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
	text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;
const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;
const AppTitle = styled.h1`
  font-size: 1.3em;
`;
const AppIntro = styled.p`
  font-size: large;
`;

export default App;
