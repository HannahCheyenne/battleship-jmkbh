import React from 'react';
import ReactDOM from 'react-dom';
import StatsButton from './StatsButton'
import { BrowserRouter } from 'react-router-dom';
  it('should render Stats Button button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <StatsButton />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  