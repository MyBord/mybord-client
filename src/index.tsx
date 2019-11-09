import 'babel-polyfill';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import Spa from './app/spa';

// console.log(window);
// console.log(window.gapi);
// @ts-ignore
// const { gapi } = window;
// gapi.client.setApiKey('AIzaSyDEbFJLaJOh1cvljQrMeFP8vvupnj7XiOY');

// @ts-ignore
// const authenticate = () => gapi.auth2.getAuthInstance()
//   .signIn({ scope: 'https://www.googleapis.com/auth/youtube.readonly' })
//   .then(() => {
//     console.log('Sign-in successful');
//   },
//   // @ts-ignore
//   (err) => {
//     console.error('Error signing in', err);
//   });
//
// authenticate();

render(
  <BrowserRouter>
    <Spa />
  </BrowserRouter>,
  document.getElementById('app'),
);
