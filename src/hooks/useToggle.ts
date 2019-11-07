import * as React from 'react';

export default (defaultBoolean: boolean = false): [boolean, () => void] => {
  const [state, setState] = React.useState(defaultBoolean);
  const toggle = (): void => setState(!state);
  return [state, toggle];
};
