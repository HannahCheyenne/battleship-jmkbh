import React from 'react';
import ReactDOM from 'react-dom';
import ContactPage from './ContactPage'
import { BrowserRouter } from 'react-router-dom';
it('should render ContactPage', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <ContactPage />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });