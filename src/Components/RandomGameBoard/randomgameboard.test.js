import React from 'react';
import ReactDOM from 'react-dom';
import RandomGameBoard from './RandomGameBoard'
import { BrowserRouter } from 'react-router-dom';
it('should render RandomGameBoard', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <RandomGameBoard />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });