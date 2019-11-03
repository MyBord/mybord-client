import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from '../useToggle';

test('should be `false` by default and toggle accurately', () => {
  const { result } = renderHook(() => useToggle());
  expect(result.current[0]).toBeFalsy();
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBeTruthy();
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBeFalsy();
});

test('should toggle accurately when started with `false` state', () => {
  const { result } = renderHook(() => useToggle(false));
  expect(result.current[0]).toBeFalsy();
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBeTruthy();
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBeFalsy();
});

test('should toggle accurately when started with `true` state', () => {
  const { result } = renderHook(() => useToggle(true));
  expect(result.current[0]).toBeTruthy();
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBeFalsy();
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBeTruthy();
});
