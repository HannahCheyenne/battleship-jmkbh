import React from 'react';
import ReactDOM from 'react-dom';
import CreateAiGame from './CreateAiGame'
import { BrowserRouter } from 'react-router-dom';
it('should render CreateAiGame button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <CreateAiGame />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });