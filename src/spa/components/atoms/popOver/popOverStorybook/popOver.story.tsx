import * as React from 'react';
import Typography from 'typography/typography';
import PopOver from '../popOver';
import * as styles from './popOverStory.module.less';

const PopOverBox = React.forwardRef<HTMLDivElement, {}>(({}, ref) => (
  <div ref={ref} className={styles.div}>
    <Typography color="white" size="bodyDefault" text="Click Me" />
  </div>
));

const PopOverStory: React.FC = () => (
  <>
    <Typography size="h1" text="Standard PopOver" />
    <PopOver Content={<h1>hello world</h1>}>
      <PopOverBox />
    </PopOver>
  </>
);

export default PopOverStory;
