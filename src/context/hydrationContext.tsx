// This context is used to determine if the page being displayed has been properly hydrated and
// is ready to be viewed by the user. We need to know this for the scenario of when a user
// starts a new browser session of our spa; in that case, instead of using a React Suspense
// fallback, we will first show the user a 'SpaFallback' during the spa initialization period,
// and we want to continue to show this same fallback until said page has been hydrated; this
// avoids the scenario of two spinners that the user would come across; the first fallback
// appearing during spa initialization, and the second being the react suspense fallback
// when the actual page is loading.

import * as React from 'react';

interface HydrationState {
  isHydrated: boolean;
  setHydrationStatus: (status: boolean) => void;
}

const initialHydrationState: HydrationState = {
  isHydrated: false,
  setHydrationStatus: () => {},
};

const HydrationContext = React.createContext<HydrationState>(initialHydrationState);

export const HydrationContextProvider = (props: object): React.ReactElement => {
  const [isHydrated, setHydrationStatus] = React.useState(false);

  return (
    <HydrationContext.Provider
      value={{
        isHydrated,
        setHydrationStatus,
      }}
      {...props}
    />
  );
};

export const useHydrationContext = (): HydrationState => React.useContext(HydrationContext);
