import * as React from 'react';
import Icon from 'icon/icon';
import Typography from 'typography/typography';
import { UserCardData } from 'schema/card';
import { useModalContext } from 'context/modalContext/modalContext';
import ImageCardModal from '../imageCardModal/imageCardModal';
import * as styles from './imageCardDescription.module.less';

interface Props {
  isPreview: boolean;
  userCardData: UserCardData;
}

const ImageCardDescription: React.FC<Props> = ({ isPreview, userCardData }) => {
  const { setModalId } = useModalContext();

  const handleClick = (): void => {
    setModalId(userCardData.id);
  };

  // const ExpandIconContent: React.FC = () => (
  //   <Icon
  //     color={isPreview ? 'darkGrey' : 'blue'}
  //     iconName="expand"
  //     size={18}
  //   />
  // );
  //
  // const LinkIconContent: React.FC = () => (
  //   <Icon
  //     color={isPreview ? 'darkGrey' : 'blue'}
  //     iconName="link"
  //     size={18}
  //   />
  // );

  return (
    <>
      <div className={styles.container}>
        <div>
          {/* <Typography */}
          {/*  maxTextLength={60} */}
          {/*  size="two" */}
          {/*  text={userCardData.title} */}
          {/*  weight="bold" */}
          {/* /> */}
        </div>
        <div className={styles.footer}>
          {/* <Typography */}
          {/*  Content={LinkIconContent} */}
          {/*  disabled={isPreview} */}
          {/*  link={userCardData.cardData.imageCardData.imageUrl} */}
          {/*  size="two" */}
          {/*  text="Link" */}
          {/*  weight="bold" */}
          {/* /> */}
          {/* <Typography */}
          {/*  Content={ExpandIconContent} */}
          {/*  disabled={isPreview} */}
          {/*  onClick={handleClick} */}
          {/*  size="two" */}
          {/*  text="Expand" */}
          {/*  weight="bold" */}
          {/* /> */}
        </div>
      </div>
      <ImageCardModal
        id={userCardData.id}
        imageUrl={userCardData.cardData.imageCardData.imageUrl}
        title={userCardData.title}
      />
    </>
  );
};

export default ImageCardDescription;
