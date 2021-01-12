import * as React from 'react';
import Dropdown from 'inputs/dropdown/dropdown';
import Typography from 'typography/typography';
import { PopOverProps } from 'types/modalTypes';
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

const placementOptions = [
  { label: 'bottom-center', value: 'bottom-center' },
  { label: 'bottom-left', value: 'bottom-left' },
  { label: 'bottom-right', value: 'bottom-right' },
  { label: 'left-bottom', value: 'left-bottom' },
  { label: 'left-center', value: 'left-center' },
  { label: 'left-top', value: 'left-top' },
  { label: 'right-bottom', value: 'right-bottom' },
  { label: 'right-center', value: 'right-center' },
  { label: 'right-top', value: 'right-top' },
  { label: 'top-center', value: 'top-center' },
  { label: 'top-left', value: 'top-left' },
  { label: 'top-right', value: 'top-right' },
];

const PopOverStory: React.FC = () => {
  const [placement, setPlacement] = React.useState<PopOverProps['placement']>('right-center');

  return (
    <>
      <Typography size="h1" text="Standard PopOver" />
      <Dropdown
        // @ts-ignore
        onChange={(event) => setPlacement(event.target.value)}
        options={placementOptions}
        value={placement}
      />
      <PopOver Content={<PopOverContent />} placement={placement}>
        <PopOverBox />
      </PopOver>
    </>
  );
};

export default PopOverStory;
