import * as React from 'react';

interface CardState {
  canEdit: boolean;
  selectedCards: string[];
  toggleEditStatus: () => void;
  toggleCard: (cardId: string) => void;
}

const initialCardState: CardState = {
  canEdit: false,
  selectedCards: [],
  toggleEditStatus: () => {},
  toggleCard: () => {},
};

const CardContext = React.createContext<CardState>(initialCardState);

export const CardContextProvider = (props: object): React.ReactElement => {
  const [canEdit, setEditStatus] = React.useState<boolean>(false);
  const [selectedCards, setSelectedCards] = React.useState<string[]>([]);

  const toggleEditStatus = (): void => setEditStatus((prevState) => !prevState);

  const toggleCard = (cardId: string): void => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards((prevState) => {
        const newState = [...prevState];
        newState.splice(prevState.indexOf(cardId), 1);
        return newState;
      });
    } else {
      setSelectedCards((prevState) => prevState.concat(cardId));
    }
  };

  return (
    <CardContext.Provider
      value={{
        canEdit,
        selectedCards,
        toggleCard,
        toggleEditStatus,
      }}
      {...props}
    />
  );
};

export const useCardContext = (): CardState => React.useContext(CardContext);
