import * as React from 'react';
import Spinner from 'icons/spinner/spinner';
import initializeApis from 'initialize/initializeApis';
import gapi from 'gapi/gapi';

// ToDo: Maybe call this `InitializeApplication` instead since the frame of the application will
//  be outside of this?

const initialize = (WrappedComponent: React.FC): React.FC => {
  const VeryFirstComponent: React.FC = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    React.useEffect(() => {
      const loadGapi = async (): Promise<void> => {
        await gapi.load();
      };
      loadGapi();
      setIsLoaded(true);
    });
    if (isLoaded) {
      return <Wrapper />;
    }
    return null;
  };

  const InitializedWrapper: React.FC = () => {
    initializeApis();
    // return <WrappedComponent />;
    return <h1>hello world</h1>;
  };

  const Wrapper: React.FC = () => (
    <React.Suspense fallback={<Spinner />}>
      <InitializedWrapper />
    </React.Suspense>
  );

  return VeryFirstComponent;
};

export default initialize;
