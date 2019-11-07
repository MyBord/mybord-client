import { renderHook, act } from '@testing-library/react-hooks';
import useToggleLottie from '../useToggleLottie';

test('should return correct default values', () => {
  const { result } = renderHook(() => useToggleLottie());
  expect(result.current[0]).toBe(1);
  expect(result.current[1]).toBe(true);
});

test('should toggle accurately', () => {
  const { result } = renderHook(() => useToggleLottie());
  expect(result.current[0]).toBe(1);
  expect(result.current[1]).toBe(true);
  act(() => {
    result.current[2]();
  });
  expect(result.current[0]).toBe(1);
  expect(result.current[1]).toBe(false);
  act(() => {
    result.current[2]();
  });
  expect(result.current[0]).toBe(-1);
  expect(result.current[1]).toBe(false);
  act(() => {
    result.current[2]();
  });
  expect(result.current[0]).toBe(1);
  expect(result.current[1]).toBe(false);
});
