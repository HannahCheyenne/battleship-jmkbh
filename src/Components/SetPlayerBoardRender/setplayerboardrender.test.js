import React from 'react';
import ReactDOM from 'react-dom';
import SetPlayerBoardRender from './SetPlayerBoardRender'
import { BrowserRouter } from 'react-router-dom';

it('should render set player board render page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <SetPlayerBoardRender />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});