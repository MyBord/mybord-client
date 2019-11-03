import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from '../useToggle';

test('should be `false` by default and toggle accurately', () => {
  const { result } = renderHook(() => useToggle());

  expect(result.current.state).toBeFalsy();

  act(() => {
    result.current.toggle();
  });

  expect(result.current.state).toBeTruthy();

  act(() => {
    result.current.toggle();
  });

  expect(result.current.state).toBeFalsy();
});

test('should toggle accurately when started with `true` state', () => {
  const { result } = renderHook(() => useToggle(true));

  expect(result.current.state).toBeTruthy();

  act(() => {
    result.current.toggle();
  });

  expect(result.current.state).toBeFalsy();

  act(() => {
    result.current.toggle();
  });

  expect(result.current.state).toBeTruthy();
});
