import React from 'react';
import ReactDOM from 'react-dom';
import DemoGame from './DemoGame'
import { BrowserRouter } from 'react-router-dom';
it('should render DemoGame button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <DemoGame />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });