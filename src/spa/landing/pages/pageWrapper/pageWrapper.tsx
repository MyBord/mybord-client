// This objective of this wrapper is to create a general api that takes a page of our landing app
// and renders it, along with telling the SpaFallback component that it no longer needs to render.
// * Note: future enhancements to this api may include data fetching, akin to
// `app/pages/pageWrapper/pageWrapper.tsx`.

import * as React from 'react';
import { useHydrationContext } from 'context/hydrationContext/hydrationContext';

const pageWrapper = (WrappedComponent: React.FC): React.FC => {
  const Page: React.FC = () => {
    const { setHydrationStatus } = useHydrationContext();

    // See *1 and *2 in `hydrationContext.tsx`
    React.useEffect(() => {
      setHydrationStatus(true);
    }, [setHydrationStatus]);

    return <WrappedComponent />;
  };

  return Page;
};

export default pageWrapper;
