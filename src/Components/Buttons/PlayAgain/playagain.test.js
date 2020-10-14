import React from 'react';
import ReactDOM from 'react-dom';
import PlayAgain from './PlayAgain'
import { BrowserRouter } from 'react-router-dom';
it('should render PlayAgain button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <PlayAgain />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });