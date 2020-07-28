import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from 'header/header';
import Routes from './routes';

const App: React.FC = () => (
  <div>
    <Link to="/myBord">MyBord</Link>
    <Link to="/about">About</Link>
    <Link to="/trending">Trending</Link>
    <Routes />
    <Header />
  </div>
);

export default App;
