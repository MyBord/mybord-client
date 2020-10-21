import * as React from 'react';
import Portal from 'portal/portal';
import UserDashboardPageContainer from './userDashboardPageContainer';
import PopOver from 'modals/popOver/popOver';

const Content: React.FC = () => {
  console.log('lll');
  return (
    <>
      <h1>hello world</h1>
      <Portal>
        <div
          style={{
            background: 'pink',
            width: '4rem',
            height: '4rem',
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        >
          foo bar
        </div>
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
