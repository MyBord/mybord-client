import * as React from 'react';

interface ToastState {
  setToastId: (toastId: string) => void;
  toastId: string;
}

const initialToastState: ToastState = {
  setToastId: () => {},
  toastId: null,
};

const ToastContext = React.createContext<ToastState>(initialToastState);

export const ToastContextProvider = (props: object): React.ReactElement => {
  const [toastId, setToastId] = React.useState<string>(null);

  return (
    <ToastContext.Provider
      value={{
        setToastId,
        toastId,
      }}
      {...props}
    />
  );
};

export const useToastContext = (): ToastState => React.useContext(ToastContext);
