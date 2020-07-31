import * as React from 'react';

interface LandingState {
  showBottom: boolean;
  setShowBottom: (showBottom: boolean) => void;
}

const initialLandingState: LandingState = {
  showBottom: false,
  setShowBottom: () => {},
};

const LandingContext = React.createContext<LandingState>(initialLandingState);

export const LandingContextProvider = (props: object): React.ReactElement => {
  const [showBottom, setShowBottom] = React.useState<boolean>(false);

  return (
    <LandingContext.Provider
      value={{
        showBottom,
        setShowBottom,
      }}
      {...props}
    />
  );
};

export const useLandingContext = (): LandingState => React.useContext(LandingContext);
