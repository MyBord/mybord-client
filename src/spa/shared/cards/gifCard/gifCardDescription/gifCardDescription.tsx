import * as React from 'react';
import Icon from 'icon/icon';
import Typography from 'typography/typography';
import { UserCard } from 'schema/card';
import { useModalContext } from 'context/modalContext/modalContext';
import GifCardModal from '../gifCardModal/gifCardModal';
import * as styles from './gifCardDescription.module.less';

interface Props {
  isPreview: boolean;
  userCard: UserCard;
}

const GifCardDescription: React.FC<Props> = ({ isPreview, userCard }) => {
  const { setModalId } = useModalContext();

  const handleClick = (): void => {
    setModalId(userCard.id);
  };

  const ExpandIconContent: React.FC = () => (
    <Icon
      color={isPreview ? 'darkGrey' : 'blue'}
      iconName="expand"
      size={18}
    />
  );

  const LinkIconContent: React.FC = () => (
    <Icon
      color={isPreview ? 'darkGrey' : 'blue'}
      iconName="link"
      size={18}
    />
  );

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
            disabled={isPreview}
            link={userCard.cardData.gifCardData.gifUrl}
            size="two"
            text="Link"
            weight="bold"
          />
          <Typography
            Content={ExpandIconContent}
            disabled={isPreview}
            onClick={handleClick}
            size="two"
            text="Expand"
            weight="bold"
          />
        </div>
      </div>
      <GifCardModal
        id={userCard.id}
        gifUrl={userCard.cardData.gifCardData.gifUrl}
        title={userCard.title}
      />
    </>
  );
};

export default GifCardDescription;
