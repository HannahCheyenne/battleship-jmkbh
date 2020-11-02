import React from 'react';
import ReactDOM from 'react-dom';
import AudioMenu from './AudioMenu'
import { BrowserRouter } from 'react-router-dom';
it('should render AudioMenu', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <AudioMenu />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });