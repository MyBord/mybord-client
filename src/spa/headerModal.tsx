import * as React from 'react';
import PopOver from './popOver';

const HeaderProfile: React.FC = () => {
  const [hidePopOver, setHidePopOver] = React.useState(null);

  const handleCallback = (props: any): void => {
    if (!hidePopOver) {
      setHidePopOver(props.hidePopOver);
    }
  };

  return (
    <PopOver callback={handleCallback}>
      <div
        style={{
          alignItems: 'center',
          background: 'blueViolet',
          borderRadius: '50%',
          color: 'white',
          display: 'flex',
          height: '5rem',
          justifyContent: 'center',
          width: '5rem',
        }}
      >
        Click Me
      </div>
    </PopOver>
  );
};

export default HeaderProfile;
