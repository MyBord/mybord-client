import * as React from 'react';
import Button from '../button';
import * as styles from 'storybook/storybook.module.less';

const ButtonDemo: React.FC = () => (
  <>
    <h3 className={styles.h3}>-- Primary Button --</h3>
    <Button label="Primary Button" onClick={() => {}} />
    <h3 className={styles.h3}>-- Secondary Button --</h3>
    <Button label="Secondary Button" onClick={() => {}} type="secondary" />
  </>
);

export default ButtonDemo;
