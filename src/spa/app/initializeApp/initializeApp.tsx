import * as React from 'react';
import gapi from 'gapi/gapi';

const initializeApp = (WrappedComponent: React.FC): React.FC => {
  const InitWrapper: React.FC = () => {
    React.useEffect(() => {
      const initializeGapi = async (): Promise<void> => {
        await gapi.initialize();
      };
      initializeGapi();
    });
    return <WrappedComponent />;
  };

  return InitWrapper;
};

export default initializeApp;
