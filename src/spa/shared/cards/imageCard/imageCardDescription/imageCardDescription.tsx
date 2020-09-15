import * as React from 'react';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import { UserCard } from 'schema/card';
import * as styles from './imageCardDescription.module.less';

interface Props {
  userCard: UserCard;
}

const ExpandIconContent: React.FC = () => <Icon color="blue" iconName="expand" size={18} />;
const LinkIconContent: React.FC = () => <Icon color="blue" iconName="link" size={18} />;

const ImageCardDescription: React.FC<Props> = ({ userCard }) => (
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
        onClick={() => console.log('foo')}
        size="two"
        text="Expand"
        weight="bold"
      />
    </div>
  </div>
);

export default ImageCardDescription;
