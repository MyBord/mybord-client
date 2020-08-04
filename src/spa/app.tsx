import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Routes from './routes';

const App: React.FC = () => (
  <div>
    <h2>Navigation</h2>
    <div style={{ margin: '1rem' }}><Link to="/pageOne">Page One (with data fetching)</Link></div>
    <div style={{ margin: '1rem' }}><Link to="/pageTwo">Page Two</Link></div>
    <div style={{ margin: '1rem' }}><Link to="/pageThree">Page Three</Link></div>
    <h2>Page</h2>
    <Header />
    <Routes />
  </div>
);

export default App;
