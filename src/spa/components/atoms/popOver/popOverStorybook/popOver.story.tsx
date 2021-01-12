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
);

const caretPlacementOptions = [
  { label: 'none', value: null },
  { label: 'auto', value: 'auto' },
  { label: 'bottom', value: 'bottom' },
  { label: 'center', value: 'center' },
  { label: 'left', value: 'left' },
  { label: 'right', value: 'right' },
  { label: 'top', value: 'top' },
];

const colorOptions = [
  { label: 'white', value: 'white' },
  { label: 'blue', value: 'blue' },
];

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

const triggerOptions = [
  { label: 'click', value: 'click' },
  { label: 'hover', value: 'hover' },
];

const PopOverStory: React.FC = () => {
  const [caretPlacement, setCaretPlacement] = React.useState<PopOverProps['caretPlacement']>(null);
  const [color, setColor] = React.useState<PopOverProps['color']>('white');
  const [placement, setPlacement] = React.useState<PopOverProps['placement']>('right-center');
  const [trigger, setTrigger] = React.useState<PopOverProps['trigger']>('click');

  return (
    <>
      <Typography size="h1" text="Standard PopOver" />
      <div className={styles.popOverContainer}>
        <div>
          <Typography size="h5" text="Placement" />
          <Dropdown
            // @ts-ignore
            onChange={(event) => setPlacement(event.target.value)}
            options={placementOptions}
            value={placement}
          />
          <Typography size="h5" text="Caret" />
          <Dropdown
            // @ts-ignore
            onChange={(event) => setCaretPlacement(event.target.value)}
            options={caretPlacementOptions}
            value={caretPlacement}
          />
          <Typography size="h5" text="Color" />
          <Dropdown
            // @ts-ignore
            onChange={(event) => setColor(event.target.value)}
            options={colorOptions}
            value={color}
          />
          <Typography size="h5" text="Trigger" />
          <Dropdown
            // @ts-ignore
            onChange={(event) => setTrigger(event.target.value)}
            options={triggerOptions}
            value={trigger}
          />
        </div>
        <div className={styles.parentBoxContainer}>
          <PopOver
            Content={<PopOverContent />}
            caretPlacement={caretPlacement}
            color={color}
            placement={placement}
            trigger={trigger}
          >
            <PopOverBox />
          </PopOver>
        </div>
      </div>
    </>
  );
};

export default PopOverStory;
