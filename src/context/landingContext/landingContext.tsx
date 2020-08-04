import * as React from 'react';

interface LandingState {
  headerRef: React.RefObject<HTMLDivElement>;
  showPages: boolean;
  setShowPages: (showPages: boolean) => void;
}

const initialLandingState: LandingState = {
  headerRef: null,
  showPages: false,
  setShowPages: () => {},
};

const LandingContext = React.createContext<LandingState>(initialLandingState);

export const LandingContextProvider = (props: object): React.ReactElement => {
  const headerRef = React.useRef(null);
  const [showPages, setShowPages] = React.useState<boolean>(false);

  return (
    <LandingContext.Provider
      value={{
        headerRef,
        showPages,
        setShowPages,
      }}
      {...props}
    />
  );
};

export const useLandingContext = (): LandingState => React.useContext(LandingContext);
