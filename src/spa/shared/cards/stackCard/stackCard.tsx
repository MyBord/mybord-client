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
    <a
      className={styles.stackCardAnchor}
      href={card.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <StackCardOverlayAnimation showOverlay={showOverlay} text={card.label} />
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
    </a>
  );
};

export default StackCard;
