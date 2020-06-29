import * as React from 'react';

interface MultiSelectCardState {
  // which card is currently 'active', e.g. video is playing, article is open, note is open, music
  // is playing, etc.
  activeCard: {
    id: string;
  };
  canMultiEdit: boolean; // can you edit multiple cards
  selectedCardIds: string[]; // which cards have been selected for multi-edit
  setActiveCardId: (cardId: string) => void;
  toggleCard: (cardId: string) => void;
  toggleMultiEditStatus: () => void;
}

const initialMultiSelectCardState: MultiSelectCardState = {
  activeCard: {
    id: null,
  },
  canMultiEdit: false,
  selectedCardIds: [],
  setActiveCardId: () => {},
  toggleCard: () => {},
  toggleMultiEditStatus: () => {},
};

const MultiSelectCardContext = React.createContext<MultiSelectCardState>(
  initialMultiSelectCardState,
);

export const MultiSelectCardContextProvider = (props: object): React.ReactElement => {
  const [
    activeCard,
    setActiveCard,
  ] = React.useState<MultiSelectCardState['activeCard']>(initialMultiSelectCardState.activeCard);

  const [
    canMultiEdit,
    setMultiEditStatus,
  ] = React.useState<boolean>(initialMultiSelectCardState.canMultiEdit);

  const [
    selectedCardIds,
    setSelectedCardIds,
  ] = React.useState<string[]>(initialMultiSelectCardState.selectedCardIds);

  const setActiveCardId = (cardId: string): void => {
    setActiveCard((prevState) => ({ ...prevState, id: cardId }));
  };

  const toggleMultiEditStatus = (): void => {
    setMultiEditStatus((prevState) => {
      if (prevState) {
        setSelectedCardIds([]);
        setActiveCardId(null);
      }
      return !prevState;
    });
  };

  const toggleCard = (cardId: string): void => {
    if (selectedCardIds.includes(cardId)) {
      setSelectedCardIds((prevState) => {
        const newState = [...prevState];
        newState.splice(prevState.indexOf(cardId), 1);
        return newState;
      });
    } else {
      setSelectedCardIds((prevState) => prevState.concat(cardId));
    }
  };

  return (
    <MultiSelectCardContext.Provider
      value={{
        activeCard,
        canMultiEdit,
        selectedCardIds,
        setActiveCardId,
        toggleCard,
        toggleMultiEditStatus,
      }}
      {...props}
    />
  );
};

export const useMultiSelectCardContext = (): MultiSelectCardState => (
  React.useContext(MultiSelectCardContext)
);
