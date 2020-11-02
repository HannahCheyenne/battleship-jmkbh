import React from 'react';
import ReactDOM from 'react-dom';
import HealthBar from './HealthBar'
import { BrowserRouter } from 'react-router-dom';
it('should render HealthBar', () => {
    const div = document.createElement('div');
    const health = [3,3,3,5]
    ReactDOM.render(
    <BrowserRouter>
    <HealthBar health = {health} />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });