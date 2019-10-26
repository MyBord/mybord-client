import * as React from 'react';

export default (): [boolean, () => void] => {
  const [state, setState] = React.useState(false);
  const toggle = (): void => setState(!state);
  return [state, toggle];
};
