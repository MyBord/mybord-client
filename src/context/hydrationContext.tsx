// *1: `isHydrated` refers to if the page being displayed has been properly hydrated and is ready
// to be viewed by the user (when we refer to hydration, we mean if the page / application has
// all the data / back end data necessary to render).
//   We need to know this for the scenario of when a user starts a new browser session in our spa;
// in that case, instead of using a React Suspense fallback, we will first show the user a
// 'SpaFallback' component during the spa initialization period, and we want to continue to
// show this same fallback until said page has been hydrated. This avoids the scenario of
// showing the user two spinners that the user would come across; the first fallback
// appearing during spa initialization, and the second being the react suspense fallback
// when the actual page is loading.

// *2: `isAnimationComplete`; our application, when it first loads / on initialization, performs
// some fancy animations and transitions. During this time, we want our 'SpaFallback' to show
// and be rendered. Only after these transitions have completed are we happy to unmount the
// 'SpaFallback' component and render the necessary application components (e.g. various
// application pages). This is specifically applicable to when a page is loaded for the first
// time and data is quickly received from the back end, and thus `isHydrated` may be set to true
// but the animations may not be complete. In this case, we still want to wait until the
// animations are complete until rendering the necessary parts of our application.

import * as React from 'react';

interface HydrationState {
  isAnimationComplete: boolean;
  isHydrated: boolean;
  setAnimationStatus: (status: boolean) => void;
  setHydrationStatus: (status: boolean) => void;
}

const initialHydrationState: HydrationState = {
  isAnimationComplete: false,
  isHydrated: false,
  setAnimationStatus: () => {},
  setHydrationStatus: () => {},
};

const HydrationContext = React.createContext<HydrationState>(initialHydrationState);

export const HydrationContextProvider = (props: object): React.ReactElement => {
  const [isAnimationComplete, setAnimationStatus] = React.useState(false);
  const [isHydrated, setHydrationStatus] = React.useState(false);

  return (
    <HydrationContext.Provider
      value={{
        isAnimationComplete,
        isHydrated,
        setAnimationStatus,
        setHydrationStatus,
      }}
      {...props}
    />
  );
};

export const useHydrationContext = (): HydrationState => React.useContext(HydrationContext);
