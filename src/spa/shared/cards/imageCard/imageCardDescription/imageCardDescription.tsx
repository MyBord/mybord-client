import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import { UserCard } from 'schema/card';
import { useModalContext } from 'context/modalContext/modalContext';
import ImageCardModal from '../imageCardModal/imageCardModal';
import * as styles from './imageCardDescription.module.less';

interface Props {
  userCard: UserCard;
}

const ExpandIconContent: React.FC = () => <Icon color="blue" iconName="expand" size={18} />;
const LinkIconContent: React.FC = () => <Icon color="blue" iconName="link" size={18} />;

const ImageCardDescription: React.FC<Props> = ({ userCard }) => {
  const { setModalId } = useModalContext();

  const handleClick = (): void => {
    setModalId(userCard.id);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <Typography
            maxTextLength={60}
            size="two"
            text={userCard.title}
            weight="bold"
          />
        </div>
        <div className={styles.footer}>
          <Typography
            Content={LinkIconContent}
            link={userCard.cardData.imageCardData.imageUrl}
            size="two"
            text="Link"
            weight="bold"
          />
          <Typography
            Content={ExpandIconContent}
            onClick={handleClick}
            size="two"
            text="Expand"
            weight="bold"
          />
        </div>
      </div>
      {/* <ImageCardModal */}
      {/*  id={userCard.id} */}
      {/*  imageUrl={userCard.cardData.imageCardData.imageUrl} */}
      {/*  title={userCard.title} */}
      {/* /> */}
    </>
  );
};

export default ImageCardDescription;
