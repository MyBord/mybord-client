import * as React from 'react';
import config, { Id } from './stackCardConfig';
import * as styles from './stackCard.module.less';

export interface Props {
  id: Id;
}

const StackCard: React.FC<Props> = ({ id }) => {
  const card = config[id];

  return (
    <div className={styles.div}>
      <img
        alt="react"
        className={card.fullSize ? styles.fullSizeImg : styles.img}
        src={card.png}
      />
    </div>
  );
};

export default StackCard;
