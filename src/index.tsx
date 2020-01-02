import 'babel-polyfill';
import * as React from 'react';
// @ts-ignore
// import { createRoot } from 'react-dom';
// import { render } from 'react-dom';
// import Spa from './spa/spa';
//
// createRoot(document.getElementById('app')).render(<Spa />);

// createRoot(document.getElementById('app')).render(<h1>hello world</h1>);
// render(<h1>hello world</h1>, document.getElementById('app'));

import ReactDOM from 'react-dom';

// If you previously had:
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// You can opt into Concurrent Mode by writing:

// @ts-ignore
ReactDOM.createRoot(
  document.getElementById('app'),
).render(<h1>hello world</h1>);
