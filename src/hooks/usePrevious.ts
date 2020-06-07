import * as React from 'react';

const usePrevious = <T extends any>(value: T): T | undefined => {
  const ref = React.useRef<T>();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;
