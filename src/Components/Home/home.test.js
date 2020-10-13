import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import { BrowserRouter } from 'react-router-dom';

it('should render home page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <Home />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});