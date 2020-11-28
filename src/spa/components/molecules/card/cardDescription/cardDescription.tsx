import * as React from 'react';
import * as styles from './cardDescription.module.less';

interface Props {
  children: React.ReactElement;
}

const CardDescription: React.FC<Props> = ({
  children,
}) => (
  <div className={styles.div}>
    {children}
  </div>
);

export default CardDescription;
