import * as React from 'react';
import Spinner from 'icons/spinner/spinner';
import initializeApis from 'initialize/initializeApis';

const initialize = (WrappedComponent: React.FC): React.FC => {
  const InitializedWrapper: React.FC = () => {
    initializeApis();
    return <WrappedComponent />;
  };

  const Wrapper: React.FC = () => (
    <React.Suspense fallback={<Spinner />}>
      <InitializedWrapper />
    </React.Suspense>
  );

  return Wrapper;
};

export default initialize;
