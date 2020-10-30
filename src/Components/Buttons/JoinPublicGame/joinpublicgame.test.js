import React from 'react';
import ReactDOM from 'react-dom';
import JoinPublicGame from './JoinPublicGame'
import { BrowserRouter } from 'react-router-dom';
it('should render Join Public Game button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <JoinPublicGame />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });