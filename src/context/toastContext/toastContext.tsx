import * as React from 'react';

interface ToastState {
  toastId: string;
  setToastId: (toastId: string) => void;
}

const initialToastState: ToastState = {
  toastId: null,
  setToastId: () => {},
};

const ToastContext = React.createContext<ToastState>(initialToastState);

export const ToastContextProvider = (props: object): React.ReactElement => {
  const [toastId, setToastId] = React.useState<string>(null);

  return (
    <ToastContext.Provider
      value={{
        toastId,
        setToastId,
      }}
      {...props}
    />
  );
};

export const useToastContext = (): ToastState => React.useContext(ToastContext);
