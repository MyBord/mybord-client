// This objective of this wrapper is to create a general api that takes a page of our app
// along with the GQL query that derives all necessary data for said page and runs that query.
// The data is then provided to the page to render its necessary components.

// when `setHydration=false`, that means that once our data has been retrieved from the backend
// and / or our wrapped component (`Component`) has mounted, we DO NOT want to stop our page's
// spinner / loading animation. This is because there might be additional work that is *still*
// happening in the background of the wrapped component after data has been drilled, such as a
// context reducer being mutated.

import * as React from 'react';
import Spinner from 'fallbacks/spinner/spinner';
import api from 'api/api';
import { GqlString } from 'types/gqlTypes';
import { useHydrationContext } from 'context/hydrationContext/hydrationContext';

interface PageContentProps {
  isAnimationComplete: boolean;
  setHydrationStatus: (status: boolean) => void;
}

interface Props {
  Component: React.FC<WrappedComponentProps>;
  gqlString?: GqlString;
  setHydration?: boolean;
}

interface WrappedComponentProps {
  data?: any;
}

const pageWrapper = ({
  Component,
  gqlString,
  setHydration = true,
}: Props): React.FC => {
  // ----- NO DATA IS NEEDED ----- //
  if (!gqlString) {
    const NoDataPage: React.FC = () => {
      const { isAnimationComplete, setHydrationStatus } = useHydrationContext();

      // See *1 in `hydrationContext.tsx`
      React.useEffect(() => {
        if (setHydration) {
          setHydrationStatus(true);
        }
      }, [setHydrationStatus]);

      // See *2 in `hydrationContext.tsx`
      if (isAnimationComplete) {
        return <Component />;
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
    React.useEffect(() => {
      if (setHydration) {
        setHydrationStatus(true);
      }
    }, [setHydrationStatus]);

    // See *2 in `hydrationContext.tsx`
    if (isAnimationComplete) {
      return <Component data={data} />;
    }
    return null;
  };

  return Page;
};

export default pageWrapper;
