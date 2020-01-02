import * as React from 'react';
import Spinner from 'icons/spinner/spinner';
import gapi from 'gapi/gapi';
import useToggle from 'hooks/useToggle';

const initializeApp = (WrappedComponent: React.FC): React.FC => {
  const InitWrapper: React.FC = () => {
    const [isInitialized, setIsInitialized] = useToggle();
    React.useEffect(() => {
      const initializeGapi = async (): Promise<void> => {
        await gapi.initialize();
        setIsInitialized();
      };
      initializeGapi();
    }, []);
    if (isInitialized) {
      return <WrappedComponent />;
    }
    return <Spinner />;
  };

  return InitWrapper;
};

export default initializeApp;
