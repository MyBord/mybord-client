import * as React from 'react';
import StackCardOverlayAnimation from 'framerMotion/stackCardOverlayAnimation';
import config, { Id } from './stackCardConfig';
import * as styles from './stackCard.module.less';

export interface Props {
  id: Id;
}

const StackCard: React.FC<Props> = ({ id }) => {
  const [showOverlay, setShowOverlay] = React.useState<boolean>(false);
  const card = config[id];

  return (
    <div className={styles.stackCardDiv}>
      {/* <StackCardOverlayAnimation showOverlay={showOverlay} /> */}
      <StackCardOverlayAnimation showOverlay />
      <div
        className={styles.mouseDiv}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      />
      <img
        alt="react"
        className={card.fullSize ? styles.fullSizeImg : styles.img}
        src={card.png}
      />
    </div>
  );
};

export default StackCard;
