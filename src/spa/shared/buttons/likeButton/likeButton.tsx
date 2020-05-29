import * as React from 'react';
import Icon from 'icons/icon/icon';
import LikeButtonAnimation from 'framerMotion/likeButtonAnimation';
import LottiePlayer from 'lotty/lottiePlayer';
import animationData from 'lotty/lotties/fireworks.json';
import * as styles from './likeButton.module.less';

interface Props {
  isLiked: boolean;
  onClick: () => void;
  size: number;
}

const LikeButton: React.FC<Props> = ({
  isLiked,
  onClick,
  size,
}) => {
  // `hasBeenClicked` indicates if the LikeButton has been clicked. We need to know this so that
  // when we first mount the Like button, its initial opacity is set to 1, but all future
  // animations have an initial opacity set to 0.
  const [hasBeenClicked, setHasBeenClicked] = React.useState<boolean>(false);

  const handleClick = (): void => {
    setHasBeenClicked(true);
    onClick();
  };

  return (
    <div>
      <button
        className={styles.button}
        onClick={handleClick}
        style={{ height: `${size}px`, width: `${size}px` }}
        type="button"
      >
        <div className={styles.lottieDiv}>
          <LottiePlayer
            animationData={animationData}
            isStopped={!isLiked}
            size={size * 2}
          />
        </div>
        <LikeButtonAnimation hasBeenClicked={hasBeenClicked} isLiked={isLiked}>
          <Icon
            color="transparentWhite"
            fill="red"
            iconName="heart"
            size={size}
          />
          <Icon
            color="transparentWhite"
            fill="transparentBlack"
            iconName="heart"
            size={size}
          />
        </LikeButtonAnimation>
      </button>
    </div>
  );
};

export default LikeButton;
