import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard'
import { BrowserRouter } from 'react-router-dom';

it('should render stats page', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <Dashboard />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});