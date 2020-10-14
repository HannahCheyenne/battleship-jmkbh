import React from 'react';
import ReactDOM from 'react-dom';
import JoinRandomGame from './JoinRandomGame'
import { BrowserRouter } from 'react-router-dom';
it('should render Join Random Game button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <JoinRandomGame />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });