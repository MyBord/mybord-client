import 'babel-polyfill';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import Spa from './app/spa';

render(
  <BrowserRouter>
    <Spa />
  </BrowserRouter>,
  document.getElementById('app'),
);
