import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './header/header';
import Routes from './routes';

const App: React.FC = () => (
  <div>
    <div style={{ margin: '1rem' }}><Link to="/pageOne">Page One (with data fetching)</Link></div>
    <div style={{ margin: '1rem' }}><Link to="/pageTwo">Page Two</Link></div>
    <div style={{ margin: '1rem' }}><Link to="/pageThree">Page Three</Link></div>
    <Routes />
    <Header />
  </div>
);

export default App;
