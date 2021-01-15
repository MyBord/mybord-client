export type CheckboxState = Record<number, boolean>;

export const getInitialCheckboxState = (n: number): CheckboxState => {
  const state: CheckboxState = {};
  let i: number;
  for (i = 0; i < n; i += 1) {
    state[i] = false;
  }

  return state;
};

