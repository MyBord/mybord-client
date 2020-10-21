import * as React from 'react';
import Portal from 'portal/portal';
import PopOver from 'modals/popOver/popOver';
import { ContentPopOverProps } from 'types/modalTypes';
import UserDashboardPageContainer from './userDashboardPageContainer';

const Content: React.FC<ContentPopOverProps> = ({ setChildRefs }) => {
  const sampleRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    console.log('*********');
    console.log(sampleRef);
    console.log('*********');
    if (sampleRef && sampleRef.current) {
      // console.log('8888888888');
      setChildRefs(() => [sampleRef]);
    }
  }, [sampleRef]);

  return (
    <>
      <h1>hello world</h1>
      <Portal>
        <button
          type="button"
          ref={sampleRef}
          style={{
            background: 'pink',
            width: '4rem',
            height: '4rem',
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        >
          <h1>hello world</h1>
        </button>
      </Portal>
    </>
  );
};

const UserDashboardPage: React.FC = () => (
  <>
    <PopOver Content={<Content />}>
      <h1>Click Me</h1>
    </PopOver>
    <UserDashboardPageContainer />
  </>
);

export default UserDashboardPage;
