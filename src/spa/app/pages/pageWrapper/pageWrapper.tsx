// This objective of this wrapper is to create a general api that takes a page of our app
// along with the GQL query that derives all necessary data for said page and runs that query.
// The data is then provided to the page to render its necessary components.

import * as React from 'react';
import Spinner from 'fallbacks/spinner/spinner';
import api from 'api/api';
import { GqlString } from 'types/gqlTypes';
import { useHydrationContext } from 'context/hydrationContext';

interface PageContentProps {
  isAnimationComplete: boolean;
  setHydrationStatus: (status: boolean) => void;
}

interface WrappedComponentProps {
  data?: any;
}

const pageWrapper = (
  WrappedComponent: React.FC<WrappedComponentProps>,
  gqlString?: GqlString,
): React.FC => {
  // ----- NO DATA IS NEEDED ----- //
  if (!gqlString) {
    const NoDataPage: React.FC = () => {
      const { isAnimationComplete, setHydrationStatus } = useHydrationContext();

      // See *1 in `hydrationContext.tsx`
      React.useEffect(() => setHydrationStatus(true), []);

      // See *2 in `hydrationContext.tsx`
      if (isAnimationComplete) {
        return <WrappedComponent />;
      }
      return null;
    };

    return NoDataPage;
  }

  // ----- DATA IS NEEDED ----- //
  const resource = api.query(gqlString);

  const Page: React.FC = () => {
    const { isAnimationComplete, isHydrated, setHydrationStatus } = useHydrationContext();
    // See *1 notes in `hydrationContext.tsx` about why our fallback `Spinner` may not render unless
    // our app has been hydrated.
    return (
      <React.Suspense fallback={isHydrated && <Spinner />}>
        <PageContent
          isAnimationComplete={isAnimationComplete}
          setHydrationStatus={setHydrationStatus}
        />
      </React.Suspense>
    );
  };

  const PageContent: React.FC<PageContentProps> = ({ isAnimationComplete, setHydrationStatus }) => {
    const data = resource.data.read();

    // See *1 in `hydrationContext.tsx`
    React.useEffect(() => setHydrationStatus(true), []);

    // See *2 in `hydrationContext.tsx`
    if (isAnimationComplete) {
      return <WrappedComponent data={data} />;
    }
    return null;
  };

  return Page;
};

export default pageWrapper;
