import React from 'react';
import ReactDOM from 'react-dom';
import QuickGameButton from './QuickGameButton'
import { BrowserRouter } from 'react-router-dom';
it('should render quick Game button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <QuickGameButton />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });