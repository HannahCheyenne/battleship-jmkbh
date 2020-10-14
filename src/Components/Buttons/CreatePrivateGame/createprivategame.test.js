import React from 'react';
import ReactDOM from 'react-dom';
import CreatePrivateGame from './CreatePrivateGame'
import { BrowserRouter } from 'react-router-dom';
it('should render createprivategame button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <CreatePrivateGame />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });