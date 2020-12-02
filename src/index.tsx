import 'babel-polyfill';
import * as React from 'react';
// @ts-ignore
import { createRoot } from 'react-dom';
import App from './app';

createRoot(document.getElementById('app')).render(<App />);
