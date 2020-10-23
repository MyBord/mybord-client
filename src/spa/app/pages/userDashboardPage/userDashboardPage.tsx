import * as React from 'react';
import Dropdown from 'inputs/dropdown/dropdown';
import { mockDropdownOptions } from 'mockData/inputsMockData';
import PopOver from 'modals/popOver/popOver';
import { ContentPopOverProps } from 'types/modalTypes';
import UserDashboardPageContainer from './userDashboardPageContainer';

const Content: React.FC<ContentPopOverProps> = ({ setChildRefs }) => {
  const sampleRef = React.useRef(null);

  React.useEffect(() => {
    if (sampleRef && sampleRef.current) {
      setChildRefs([sampleRef]);
    }
  }, [sampleRef]);

  return (
    <div ref={sampleRef}>
      <h1>hello world</h1>
      <Dropdown options={mockDropdownOptions} />
    </div>
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
