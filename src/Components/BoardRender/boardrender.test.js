import React from 'react';
import ReactDOM from 'react-dom';
import BoardRender from './BoardRender'
import { BrowserRouter } from 'react-router-dom';
it('should render BoardRender button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <BoardRender />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });