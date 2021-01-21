import * as React from 'react';
import PopOver from 'popOver/popOver';
import Tag from 'atoms/tag/tag';
import UserCardEllipsisTagContent from './userCardEllipsisTagContent';
import getUserCardTags, { UserCardTags } from 'userCard/userCardUtils/getUserCardTags';
import { UserCardData } from 'schema/card';
import * as styles from './userCardDescriptionTags.module.less';

interface Props {
  userCardData: UserCardData;
}

const UserCardDescriptionTags: React.FC<Props> = ({ userCardData }) => {
  const [userCardTags, setUserCardTags] = React.useState<UserCardTags>(null);

  React.useEffect(() => {
    setUserCardTags(getUserCardTags(userCardData.tags));
  }, [userCardData.tags]);

  return (
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
          <PopOver
            Content={<UserCardEllipsisTagContent userCardTags={userCardTags} />}
            caretPlacement="center"
          >
            <Tag
              className={[styles.tag, styles.ellipsis].join(' ')}
              color={userCardTags.ellipsis.color}
              ellipsis
            />
          </PopOver>
        )
      }
    </div>
  );
};

export default UserCardDescriptionTags;
