import React from 'react';
import ReactDOM from 'react-dom';
import QuickGame from './QuickGame'
import { BrowserRouter } from 'react-router-dom';

it('should render quick game page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <QuickGame />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});