import * as React from 'react';
import PopOver from '../popOver';

const PopOverDemo: React.FC = () => (
  <PopOver
    Content={<h1>hello world</h1>}
  >
    <h1>test test</h1>
  </PopOver>
);

export default PopOverDemo;
