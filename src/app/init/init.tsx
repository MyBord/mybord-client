import * as React from 'react';
import gapi from 'google/gapi';

const init = (WrappedComponent: React.FC): React.FC => {
  const InitWrapper: React.FC = () => {
    React.useEffect(() => {
      const initializeGapi = async (): Promise<void> => {
        const foo = await gapi.initialize();
        console.log(foo);
      };
      initializeGapi();
    });
    return <WrappedComponent />;
  };

  return InitWrapper;
};

export default init;
