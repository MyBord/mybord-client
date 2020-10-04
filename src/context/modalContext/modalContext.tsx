import * as React from 'react';

interface ModalState {
  modalData: any;
  modalId: string;
  setModalData: (data: any) => void;
  setModalId: (modalId: string) => void;
}

const initialModalState: ModalState = {
  modalData: null,
  modalId: null,
  setModalData: () => {},
  setModalId: () => {},
};

const ModalContext = React.createContext<ModalState>(initialModalState);

export const ModalContextProvider = (props: object): React.ReactElement => {
  const [modalData, setModalData] = React.useState<any>(null);
  const [modalId, setModalId] = React.useState<string>(null);

  return (
    <ModalContext.Provider
      value={{
        modalData,
        modalId,
        setModalData,
        setModalId,
      }}
      {...props}
    />
  );
};

export const useModalContext = (): ModalState => React.useContext(ModalContext);
