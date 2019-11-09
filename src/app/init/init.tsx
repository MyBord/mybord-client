import * as React from 'react';
import GAPI from 'google/gapi';

// initializes application
const init = (WrappedComponent: React.FC): React.FC => {
  const InitWrapper: React.FC = () => {
    React.useEffect(() => {
      // @ts-ignore
      const initializeGapi = async (): Promise => {
        const gapi = new GAPI();
        const foo = await gapi.initialize();
        console.log('************');
        console.log(foo);
      };
      initializeGapi();
    });
    // if (gapi.)
    return (
      <>
        <button type="button" onClick={() => new GAPI().getVideoData('6-8k-o_ofDw')}>Load</button>
        <WrappedComponent />
      </>
    );
  };

  return InitWrapper;
};

export default init;
