import * as React from 'react';
import Portal from 'portal/portal';
import * as styles from './modal.module.less';

const Modal: React.FC = () => (
  <Portal>
    <section className={styles.section}>
      <h1>This is a modal</h1>
    </section>
  </Portal>
);

export default Modal;
