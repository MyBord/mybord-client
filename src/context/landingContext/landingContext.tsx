import * as React from 'react';

interface LandingState {
  showPages: boolean;
  setShowPages: (showPages: boolean) => void;
}

const initialLandingState: LandingState = {
  showPages: false,
  setShowPages: () => {},
};

const LandingContext = React.createContext<LandingState>(initialLandingState);

export const LandingContextProvider = (props: object): React.ReactElement => {
  const [showPages, setShowPages] = React.useState<boolean>(false);

  return (
    <LandingContext.Provider
      value={{
        showPages,
        setShowPages,
      }}
      {...props}
    />
  );
};

export const useLandingContext = (): LandingState => React.useContext(LandingContext);
