import * as React from 'react';

interface CardState {
  canEdit: boolean;
  toggleEditStatus: () => void;
}

const initialCardState: CardState = {
  canEdit: false,
  toggleEditStatus: () => {},
};

const CardContext = React.createContext<CardState>(initialCardState);

export const CardContextProvider = (props: object): React.ReactElement => {
  const [canEdit, setEditStatus] = React.useState(false);
  const toggleEditStatus = (): void => setEditStatus((prevState) => !prevState);

  return (
    <CardContext.Provider
      value={{
        canEdit,
        toggleEditStatus,
      }}
      {...props}
    />
  );
};

export const useCardContext = (): CardState => React.useContext(CardContext);
