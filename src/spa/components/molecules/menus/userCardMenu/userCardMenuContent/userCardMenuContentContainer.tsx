// *1: Note: The entire card component `card.tsx` is memoized and will re render only when its
// props change *except* for `isFavorite` `isToDo`. Thus, this component would normally not get
// when `isToDo` is toggled, so instead, we rehook into the context at this component level.

import * as React from 'react';
import {
  UserCardData,
} from 'schema/card';
import { TOGGLE_CARD_FILTER } from 'context/userDashboardContext/userDashboardReducerTypes';
import { useUserDashboardContext } from 'context/userDashboardContext/userDashboardContext';
import UserCardMenuContentComponent from './userCardMenuContentComponent';

export interface Props {
  cardId: UserCardData['id'];
}

const UserCardMenuContentContainer: React.FC<Props> = ({ cardId }) => {
  const { state, dispatch } = useUserDashboardContext();

  const userCard = state.byId[cardId]; // *1

  const [isToDo, setIsToDo] = React.useState<boolean>(userCard.isToDo);

  const toggleToDo = async (): Promise<void> => {
    setIsToDo((prevState) => !prevState);
    // eslint-disable-next-line sort-keys
    dispatch({ type: TOGGLE_CARD_FILTER, filter: 'toDo', id: userCard.id });
  };

  return (
    <UserCardMenuContentComponent
      handleDelete={() => {}}
      isToDo={isToDo}
      toggleToDo={toggleToDo}
    />
  );
};

export default UserCardMenuContentContainer;
