import React from 'react';
import ReactDOM from 'react-dom';
import PlayerBoardRender from './PlayerBoardRender'
import { BrowserRouter } from 'react-router-dom';

it('should render PlayerBoard page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <PlayerBoardRender />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});