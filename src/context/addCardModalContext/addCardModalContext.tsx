import * as React from 'react';

interface AddCardModalState {
  setTitle: (title: string) => void;
  title: string;
}

const initialAddCardModalState: AddCardModalState = {
  setTitle: () => {},
  title: null,
};

const AddCardModalContext = React.createContext<AddCardModalState>(initialAddCardModalState);

export const AddCardModalContextProvider = (props: object): React.ReactElement => {
  const [title, setTitle] = React.useState<string>(null);

  return (
    <AddCardModalContext.Provider
      value={{
        setTitle,
        title,
      }}
      {...props}
    />
  );
};

export const useAddCardModalContext = (): AddCardModalState => (
  React.useContext(AddCardModalContext)
);
