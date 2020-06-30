import * as React from 'react';
import PopOver from '../popOver';

const PopOverDemo: React.FC = () => (
  <PopOver
    Content={<h1>hello world</h1>}
    defaultVisible
  >
    <div style={{ border: '1px solid red', width: '8rem', height: '8rem', marginLeft: '8rem' }}>
      <h1>I am some content</h1>
    </div>
  </PopOver>
);

export default PopOverDemo;
