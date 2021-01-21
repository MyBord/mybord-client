import * as React from 'react';
import Tag from 'atoms/tag/tag';
import { UserCardTags } from 'userCard/userCardUtils/getUserCardTags';
import * as styles from './userCardDescriptionTags.module.less';

interface Props {
  userCardTags: UserCardTags;
}

const UserCardEllipsisTagContent: React.FC<Props> = ({ userCardTags }) => (
  <div className={styles.ellipsisContentContainer}>
    {
      userCardTags.tags.map((tag, index) => (
        <Tag
          key={`${tag.label}-${index}`}
          className={styles.tag}
          color={tag.color}
          label={tag.label}
        />
      ))
    }
  </div>
);

export default UserCardEllipsisTagContent;
