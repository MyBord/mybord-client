import * as React from 'react';
import GAPI from 'google/gapi';

// initializes application
const init = (WrappedComponent: React.FC): React.FC => {
  const InitWrapper: React.FC = () => {
    React.useEffect(() => {
      const gapi = new GAPI();
      // @ts-ignore
      const initializeGapi = async (): Promise => {
        await gapi.initialize();
        await gapi.execute();
      };
      initializeGapi();
    });
    return <WrappedComponent />;
  };

  return InitWrapper;
};

export default init;
