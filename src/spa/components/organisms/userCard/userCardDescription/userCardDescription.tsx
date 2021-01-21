import * as React from 'react';
import { UserCardData } from 'schema/card';
import Typography from 'typography/typography';
import Tag from 'atoms/tag/tag';
import getUserCardTags, { UserCardTags } from 'userCard/userCardUtils/getUserCardTags';
import * as styles from './userCardDescription.module.less';

interface Props {
  userCardData: UserCardData;
}

const UserCardDescription: React.FC<Props> = ({ userCardData }) => {
  const [userCardTags, setUserCardTags] = React.useState<UserCardTags>(null);

  React.useEffect(() => {
    setUserCardTags(getUserCardTags(userCardData.tags));
  }, [userCardData.tags]);

  return (
    <div className={styles.descriptionContainer}>
      <Typography
        hasMargin={false}
        text={userCardData.title}
        type="h6"
      />
      <Typography
        hasMargin={false}
        text={userCardData.subtitle}
        type="bodySmall"
      />
      <div className={styles.tagsContainer}>
        {
          userCardTags && userCardTags.tags.filter((tag) => tag.show).map((tag, index) => (
            <Tag
              key={`${tag.label}-${index}`}
              className={styles.tag}
              color={tag.color}
              label={tag.label}
            />
          ))
        }
        {
          userCardTags && userCardTags.ellipsis.show && (
            <Tag
              className={styles.tag}
              color={userCardTags.ellipsis.color}
              ellipsis
            />
          )
        }
      </div>
    </div>
  );
};

export default UserCardDescription;
