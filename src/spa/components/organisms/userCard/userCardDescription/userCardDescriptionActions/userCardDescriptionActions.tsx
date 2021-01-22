import * as React from 'react';
import IconButton from 'buttons/iconButton/iconButton';
import { UserCardData } from 'schema/card';
import * as styles from './userCardDescriptionActions.module.less';

interface Props {
  userCardData: UserCardData;
}

const UserCardDescriptionActions: React.FC<Props> = ({ userCardData }) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(userCardData.isFavorite);
  const [isToDo, setIsToDo] = React.useState<boolean>(userCardData.isToDo);

  const handleFavorite = (): void => setIsFavorite((prevState) => !prevState);
  const handleToDo = (): void => setIsToDo((prevState) => !prevState);

  return (
    <div className={styles.divContainer}>
      <IconButton
        className={isToDo ? styles.greenCheckmark : styles.blackCheckmark}
        iconName="checkmark"
        onClick={handleToDo}
        size={20}
      />
      <IconButton
        className={isFavorite ? styles.redHeart : styles.emptyHeart}
        iconName="heart"
        onClick={handleFavorite}
        size={20}
        strokeWidth={0.75}
      />
      <IconButton
        iconName="trash"
        size={20}
        strokeWidth={0.75}
      />
      <IconButton
        iconName="pencil"
        size={20}
        strokeWidth={0.75}
      />
    </div>
  );
};

export default UserCardDescriptionActions;
