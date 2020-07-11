import * as React from 'react';
import PopOver from './popOver';

const Content: React.FC = () => <h3>hello world</h3>;

const PopOverDemo: React.FC = () => (
  <PopOver
    Content={<Content />}
    placement="right-center"
    trigger="hover"
    delay={1000}
  >
    <div
      style={{
        background: 'pink',
        width: '20rem',
        height: '20rem',
        margin: '5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>this is a container</p>
    </div>
  </PopOver>
);

export default PopOverDemo;
