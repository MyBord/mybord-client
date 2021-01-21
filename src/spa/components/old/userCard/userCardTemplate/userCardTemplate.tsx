import * as React from 'react';
import { UserCardData } from 'schema/card';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';
import UserCardContent from 'molecules/userCardMolecules/userCardContent/userCardContent';
import UserCardDescription
  from 'molecules/userCardMolecules/userCardDescription/userCardDescription';
// import UserCardFooter from 'molecules/userCardMolecules/userCardFooter/userCardFooter';
import UserCardOverlay from 'molecules/userCardMolecules/userCardOverlay/userCardOverlay';
import * as styles from './userCardTemplate.module.less';

// This card component is the parent component that wraps every is the unique card type to make
// sure that every card, regardless of type, has the same consistent styling and functionality.

export interface Props {
  Content: React.ReactElement;
  Description: React.ReactElement;
  isPreview: boolean;
  userCardData: UserCardData;
}

const UserCardTemplate: React.FC<Props> = ({
  Content,
  Description,
  isPreview,
  userCardData,
}) => {
  const { selectedCardIds } = useMultiSelectCardContext();
  const isSelected = selectedCardIds.includes(userCardData.id);

  return (
    <div
      className={[
        styles.container,
        isSelected ? styles.selectedContainer : undefined,
        isPreview ? styles.containerPreview : undefined,
      ].join(' ')}
    >
      <UserCardOverlay cardId={userCardData.id} />
      <UserCardContent
        isPreview={isPreview}
        userCardData={userCardData}
      >
        {Content}
      </UserCardContent>
      <UserCardDescription>
        {Description}
      </UserCardDescription>
      {/* <CardFooter /> */}
    </div>
  );
};

export default UserCardTemplate;
