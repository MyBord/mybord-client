import * as React from 'react';
import Button from 'buttons/button/button';
import * as styles from './modalFooter.module.less';

const ModalFooter: React.FC = () => (
  <>
    <Button label="add" />
    <Button label="add" type="secondary" />
  </>
);

export default ModalFooter;
