import * as React from 'react';
import { UserCardData } from 'schema/card';
import Typography from 'typography/typography';
import UserCardDescriptionActions from './userCardDescriptionActions/userCardDescriptionActions';
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
      className={styles.subTitle}
      hasMargin={false}
      text={userCardData.subtitle}
      type="bodySmall"
    />
    <UserCardDescriptionTags userCardData={userCardData} />
    <UserCardDescriptionActions />
  </div>
);

export default UserCardDescription;
