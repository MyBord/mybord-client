import * as React from 'react';
import Typography from 'typography/typography';
import { UserCardData } from 'schema/card';
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
      maxTextLength={48}
      text={userCardData.title}
      type="h6"
    />
    <Typography
      className={styles.subTitle}
      hasMargin={false}
      maxTextLength={56}
      text={userCardData.subtitle}
      type="bodySmall"
    />
    <UserCardDescriptionTags userCardData={userCardData} />
    <UserCardDescriptionActions userCardData={userCardData} />
  </div>
);

export default UserCardDescription;
