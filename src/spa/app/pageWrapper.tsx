// This objective of this wrapper is to create a general api that takes a page of our app
// along with the GQL query that derives all necessary data for said page and runs that query.
// The data is then provided to the page to render its necessary components.

// when `setHydration=false`, that means that once our data has been retrieved from the backend
// and / or our wrapped component (`Component`) has mounted, we DO NOT want to stop our page's
// spinner / loading animation. This is because there might be additional work that is *still*
// happening in the background of the wrapped component after data has been drilled, such as a
// context reducer being mutated.

import * as React from 'react';
import api from 'api/api';
import { useHydrationContext } from 'context/hydrationContext/hydrationContext';

interface Props {
  Component: React.FC<WrappedComponentProps>;
  gqlString?: any;
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
      const { setHydrationStatus } = useHydrationContext();

      // See *1 in `hydrationContext.tsx`
      React.useEffect(() => {
        if (setHydration) {
          setHydrationStatus(true);
        }
      }, [setHydrationStatus]);

      return <Component />;
    };

    return NoDataPage;
  }

  // ----- DATA IS NEEDED ----- //
  const resource = api.query(gqlString);

  const FallbackComponent: React.FC = () => (
    <div
      style={{
        border: '16px solid #f3f3f3',
        borderRadius: '50%',
        borderTop: '16px solid #3498db',
        width: '120px',
        height: '120px',
        animation: 'spin 2s linear infinite',
        margin: '16px',
      }}
    />
  );

  const Page: React.FC = () => (
    <React.Suspense fallback={<FallbackComponent />}>
      <PageContent />
    </React.Suspense>
  );

  const PageContent: React.FC = () => {
    const data = resource.data.read();

    return <Component data={data} />;
  };

  return Page;
};

export default pageWrapper;
