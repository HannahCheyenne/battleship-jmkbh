import React from 'react';
import ReactDOM from 'react-dom';
import StartGame from './StartGame'
import { BrowserRouter } from 'react-router-dom';
it('should render Start Game button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <StartGame />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });