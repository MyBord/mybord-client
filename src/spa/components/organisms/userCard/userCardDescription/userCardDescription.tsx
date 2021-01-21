import * as React from 'react';
import { UserCardData } from 'schema/card';
import Typography from 'typography/typography';
import UserCardDescriptionTags from './userCardDescriptionTags/userCardDescriptionTags';
import * as styles from './userCardDescription.module.less';

interface Props {
  userCardData: UserCardData;
}

const UserCardDescription: React.FC<Props> = ({ userCardData }) => (
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
    <UserCardDescriptionTags userCardData={userCardData} />
  </div>
);

export default UserCardDescription;
