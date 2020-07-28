import * as React from 'react';
import pageWrapper from 'pages/pageWrapper/pageWrapper';

const TrendingPage: React.FC = () => (
  <div
    style={{
      background: 'pink',
      height: '10rem',
      width: '10rem',
    }}
  >
    Trending Page
  </div>
);

export default pageWrapper({ Component: TrendingPage });
