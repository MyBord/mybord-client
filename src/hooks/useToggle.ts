import * as React from 'react';

interface Hook {
  state: boolean;
  toggle: () => void;
}

export default (defaultBoolean: boolean = false): Hook => {
  const [state, setState] = React.useState(defaultBoolean);
  const toggle = (): void => setState(!state);
  return { state, toggle };
};
