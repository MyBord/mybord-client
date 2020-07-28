import * as React from 'react';
import pageWrapper from 'pages/pageWrapper/pageWrapper';

const AboutPage: React.FC = () => (
  <div
    style={{
      background: 'orange',
      height: '10rem',
      width: '10rem',
    }}
  >
    <h1>About Page</h1>
  </div>
);

export default pageWrapper({ Component: AboutPage });
