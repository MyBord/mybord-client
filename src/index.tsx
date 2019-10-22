import 'babel-polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import Spa from './app/spa';

render(
  <Spa />, document.getElementById('app'),
);
