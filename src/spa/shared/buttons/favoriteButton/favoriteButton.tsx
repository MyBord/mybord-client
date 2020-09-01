import * as React from 'react';
import Icon from 'icons/icon/icon';
import FavoriteButtonAnimation from 'framerMotion/favoriteButtonAnimation';
import LottiePlayer from 'lotty/lottiePlayer';
import animationData from 'lotty/lotties/fireworks.json';
import * as styles from './favoriteButton.module.less';

interface Props {
  isFavorite?: boolean;
  onChange?: (value: boolean) => void;
  onClick?: () => void;
  size: number;
  value?: boolean;
}

const FavoriteButton: React.FC<Props> = ({
  isFavorite,
  onChange = null,
  onClick = null,
  size,
  value,
}) => {
  // `hasBeenClicked` indicates if the LikeButton has been clicked. We need to know this so that
  // when we first mount the Like button, its initial opacity is set to 1, but all future
  // animations have an initial opacity set to 0.
  const [hasBeenClicked, setHasBeenClicked] = React.useState<boolean>(false);

  const handleClick = (): void => {
    setHasBeenClicked(true);

    if (onChange) {
      onChange(!value);
    }

    if (onClick) {
      onClick();
    }
  };

  const isFavoriteFinal = isFavorite || value;

  return (
    <div className="like-button">
      <button
        className={styles.button}
        onClick={handleClick}
        style={{ height: `${size}px`, width: `${size}px` }}
        type="button"
      >
        <div className={styles.lottieDiv}>
          <LottiePlayer
            animationData={animationData}
            isStopped={!isFavoriteFinal}
            size={size * 2}
          />
        </div>
        <FavoriteButtonAnimation
          hasBeenClicked={hasBeenClicked}
          isFavorite={isFavoriteFinal}
        >
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
        </FavoriteButtonAnimation>
      </button>
    </div>
  );
};

export default FavoriteButton;
