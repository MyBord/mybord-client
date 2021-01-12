import * as React from 'react';
import Typography from 'typography/typography';
import { lorem } from 'utils/loremIpsum';
import PopOver from '../popOver';
import * as styles from './popOverStory.module.less';

const PopOverBox = React.forwardRef<HTMLDivElement, {}>(({}, ref) => (
  <div className={styles.boxDivContainer}>
    <div ref={ref} className={styles.boxDiv}>
      <Typography color="white" size="bodyDefault" text="Click Me" />
    </div>
  </div>
));

const PopOverContent: React.FC = () => (
  <div className={styles.typographyDiv}>
    <Typography size="bodyDefault" text={lorem} />
  </div>
)

const PopOverStory: React.FC = () => (
  <>
    <Typography size="h1" text="Standard PopOver" />
    <PopOver Content={<PopOverContent />}>
      <PopOverBox />
    </PopOver>
  </>
);

export default PopOverStory;
