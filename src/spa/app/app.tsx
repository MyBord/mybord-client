import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'layout/layout';
import Routes from './routes';

const App: React.FC = () => (
  <div>
    <Link to="/myBord">MyBord</Link>
    <Link to="/about">About</Link>
    <Link to="/trending">Trending</Link>
    <Routes />
  </div>
);

export default App;
