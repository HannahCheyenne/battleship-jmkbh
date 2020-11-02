import React from 'react';
import ReactDOM from 'react-dom';
import EndGameOverlay from './EndGameOverlay'
import { BrowserRouter } from 'react-router-dom';
it('should render EndGameOverlay', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <EndGameOverlay />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });