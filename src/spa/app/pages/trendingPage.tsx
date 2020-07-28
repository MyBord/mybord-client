import * as React from 'react';
import pageWrapper from 'pages/pageWrapper';

const TrendingPage: React.FC = () => (
  <div
    style={{
      background: 'pink',
      height: '10rem',
      width: '10rem',
    }}
  >
    <h1>Trending Page</h1>
  </div>
);

export default pageWrapper({ Component: TrendingPage });
