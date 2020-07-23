import * as React from 'react';
import config, { Id } from './stackCardConfig';
import * as styles from './stackCard.module.less';

export interface Props {
  id: Id;
}

const StackCard: React.FC<Props> = ({ id }) => (
  <div className={styles.div}>
    <img alt="react" className={styles.img} src={config[id].png} />
  </div>
);

export default StackCard;
