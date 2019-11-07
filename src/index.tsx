import 'babel-polyfill';
import * as React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
// import Spa from './app/spa';
// import SpaTwo from './app/spaTwo';
import SpaThree from './app/spaThree';

// render(
//   <BrowserRouter>
//     <Spa />
//   </BrowserRouter>,
//   document.getElementById('app'),
// );

// render(
//   <SpaTwo />,
//   document.getElementById('app'),
// );

render(
  <SpaThree />,
  document.getElementById('app'),
);
