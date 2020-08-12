import * as React from 'react';
import Anchor from 'inputs/anchor/anchor';
import Button from 'buttons/button/button';
import * as styles from './modalFooter.module.less';

const ModalFooter: React.FC = () => (
  <div className={styles.div}>
    <Button label="add" type="secondary" />
    <Anchor label="foo" />
    <Button label="add" />
  </div>
);

export default ModalFooter;
