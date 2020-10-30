import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './GameBoard'
import { BrowserRouter } from 'react-router-dom';

it('should render set game board render page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <GameBoard />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});