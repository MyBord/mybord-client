import * as React from 'react';
import Typography from 'typography/typography';
import PopOver from '../popOver';
import * as styles from './popOverStory.module.less';

const PopOverBox: React.FC = () => (
  <div className={styles.div}>
    <Typography color="white" size="bodyDefault" text="Click Me" />
  </div>
);

const PopOverStory: React.FC = () => (
  <>
    <Typography size="h1" text="Standard PopOver" />
    <Typography size="h3" text="w/ React FC" />
    <PopOver Content={<h1>hello world</h1>}>
      <PopOverBox />
    </PopOver>
    <Typography size="h3" text="w/out React FC" />
    <PopOver Content={<h1>hello world</h1>}>
      <div className={styles.div}>
        <Typography color="white" size="bodyDefault" text="Click Me" />
      </div>
    </PopOver>
  </>
);

export default PopOverStory;
