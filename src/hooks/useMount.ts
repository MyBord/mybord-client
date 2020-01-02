import { useEffect, useRef } from 'react';

// invokes a function before the component mounts.
const useMount = (fn: Function): void => {
  const hasNotMounted = useRef(true);

  if (hasNotMounted.current) {
    fn();
  }

  useEffect(() => {
    hasNotMounted.current = false;
  }, []);
};

export default useMount;
