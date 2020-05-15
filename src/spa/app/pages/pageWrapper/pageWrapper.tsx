// ToDo: write comments / notes
// ToDo: make query a param
import * as React from 'react';
import Spinner from 'fallbacks/spinner/spinner';
import api from 'api/api';
import { GET_USER_CARDS } from 'schema/card';
import { useHydrationContext } from 'context/hydrationContext';

interface PageContentProps {
  isAnimationComplete: boolean;
  setHydrationStatus: (status: boolean) => void;
}

interface WrappedComponentProps {
  data: any;
}

const pageWrapper = (WrappedComponent: React.FC<WrappedComponentProps>): React.FC => {
  const resource = api.query(GET_USER_CARDS);

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
