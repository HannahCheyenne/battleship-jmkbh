import React from 'react';
import ReactDOM from 'react-dom';
import NewGame from './NewGame'
import { BrowserRouter } from 'react-router-dom';

it('should render new game render page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <NewGame />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});