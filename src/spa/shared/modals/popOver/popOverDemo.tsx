import * as React from 'react';
import PopOver from './popOver';

const Content: React.FC = () => <h3>hello world</h3>;

interface Props {
  delay: number;
  trigger: 'hover' | 'click';
}

const Demo: React.FC<Props> = ({ delay, trigger }) => (
  <PopOver
    Content={<Content />}
    placement="right-center"
    trigger={trigger}
    delay={delay}
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
      <p>{trigger === 'click' ? 'Click Me' : 'Hover Me'}</p>
    </div>
  </PopOver>
);

const PopOverDemo: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <h1>Delay</h1>
    <Demo trigger="hover" delay={1000} />
    <Demo trigger="click" delay={1000} />
    <h1>No delay</h1>
    <Demo trigger="hover" delay={null} />
    <Demo trigger="click" delay={null} />
  </div>
);

export default PopOverDemo;
