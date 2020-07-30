import * as React from 'react';
import pageWrapper from './pageWrapper';

const PageThree: React.FC = () => (
  <div
    style={{
      alignItems: 'center',
      background: 'green',
      display: 'flex',
      height: '15rem',
      justifyContent: 'center',
      width: '15rem',
    }}
  >
    <h1 style={{ color: 'white' }}>Page Three</h1>
  </div>
);

export default pageWrapper({ Component: PageThree });
