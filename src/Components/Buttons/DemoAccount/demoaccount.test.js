import React from 'react';
import ReactDOM from 'react-dom';
import DemoAccount from './DemoAccount'
import { BrowserRouter } from 'react-router-dom';
it('should render DemoAccount button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <DemoAccount />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });