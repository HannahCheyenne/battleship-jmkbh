import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register'
import { BrowserRouter } from 'react-router-dom';

it('should render register page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <Register />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});