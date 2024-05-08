import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
// import { createRoot } from 'react-dom';
import client from 'server/client';
// This import is included just to make sure that webpack will include the favicon in it's build
// / bundle process, so that index.html can have reference to it later.
import logo from 'graphics/logo.png';
import Spa from './spa/spa';

ReactDOM.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>,
  document.getElementById('app'),
);

// createRoot(document.getElementById('app')).render(<Spa />);
// createRoot(document.getElementById('app')).render(<div>hello world</div>);
