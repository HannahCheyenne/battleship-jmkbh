import React from 'react';
import ReactDOM from 'react-dom';
import StatsButton from './StataButton/StatsButton'
import CreateAiGame from './CreateAiGame/CreateAiGame'
import CreatePrivateGame from './CreatePrivateGame/CreatePrivateGame'
import DemoGame from './DemoGame/DemoGame'
import JoinRandomGame from './JoinRandomGame/JoinRandomGame'
import PlayAgain from './PlayAgain/PlayAgain'
import StartGame from './StatsButton/StatsButton'

import { BrowserRouter } from 'react-router-dom';

it('should render CreateAiGame button', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <CreateAiGame />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
it('should render createprivategame button', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <CreatePrivateGame />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
it('should render DemoGame button', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <DemoGame />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
it('should render Join Random Game button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <JoinRandomGame />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render PlayAgain button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <PlayAgain />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render Start Game button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <StartGame />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render Stats Button button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <StatsButton />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  