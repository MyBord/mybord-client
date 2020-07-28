import * as React from 'react';
import pageWrapper from 'pages/pageWrapper';

const AboutPage: React.FC = () => (
  <div
    style={{
      alignItems: 'center',
      background: 'orange',
      display: 'flex',
      height: '15rem',
      justifyContent: 'center',
      width: '15rem',
    }}
  >
    <h1 style={{ color: 'white' }}>About Page</h1>
  </div>
);

export default pageWrapper({ Component: AboutPage });
