import 'babel-polyfill';
import * as React from 'react';
// @ts-ignore
import { createRoot } from 'react-dom';
import Spa from './spa/spa';

createRoot(document.getElementById('app')).render(<Spa />);
