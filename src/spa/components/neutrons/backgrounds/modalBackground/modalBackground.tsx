import * as React from 'react';
import Portal from 'portal/portal';
import * as styles from './modalBackground.module.less';

const ModalBackground: React.FC = () => (
  <Portal>
    <section className={styles.section} />
  </Portal>
);

export default ModalBackground;
