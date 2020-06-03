import * as React from 'react';

interface CardState {
  activeCardId: string; // which card is currently 'active', e.g. video is playing, article is
  // open, note is open, music is playing, etc.
  canEdit: boolean; // can you multi-edit cards
  selectedCardIds: string[]; // which cards have been selected for multi-edit
  setActiveCardId: (cardId: string) => void;
  toggleEditStatus: () => void;
  toggleCard: (cardId: string) => void;
}

const initialCardState: CardState = {
  activeCardId: null,
  canEdit: false,
  selectedCardIds: [],
  setActiveCardId: () => {},
  toggleEditStatus: () => {},
  toggleCard: () => {},
};

const CardContext = React.createContext<CardState>(initialCardState);

export const CardContextProvider = (props: object): React.ReactElement => {
  const [activeCardId, setActiveCardId] = React.useState<string>(null);
  const [canEdit, setEditStatus] = React.useState<boolean>(false);
  const [selectedCardIds, setSelectedCardIds] = React.useState<string[]>([]);

  const toggleEditStatus = (): void => {
    setEditStatus((prevState) => {
      if (prevState) {
        setSelectedCardIds([]);
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
    <CardContext.Provider
      value={{
        activeCardId,
        canEdit,
        selectedCardIds,
        setActiveCardId,
        toggleCard,
        toggleEditStatus,
      }}
      {...props}
    />
  );
};

export const useCardContext = (): CardState => React.useContext(CardContext);
