import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './header/header';
import Routes from './routes';

const App: React.FC = () => (
  <div>
    <div style={{ margin: '1rem' }}><Link to="/myBord">MyBord</Link></div>
    <div style={{ margin: '1rem' }}><Link to="/about">About</Link></div>
    <div style={{ margin: '1rem' }}><Link to="/trending">Trending</Link></div>
    <Routes />
    <Header />
  </div>
);

export default App;
