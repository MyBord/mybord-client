import * as React from 'react';

interface ModalState {
  modalId: string;
  setModalId: (modalId: string) => void;
}

const initialModalState: ModalState = {
  modalId: null,
  setModalId: () => {},
};

const ModalContext = React.createContext<ModalState>(initialModalState);

export const ModalContextProvider = (props: object): React.ReactElement => {
  const [modalId, setModalId] = React.useState<string>(null);

  return (
    <ModalContext.Provider
      value={{
        modalId,
        setModalId,
      }}
      {...props}
    />
  );
};

export const useModalContext = (): ModalState => React.useContext(ModalContext);
