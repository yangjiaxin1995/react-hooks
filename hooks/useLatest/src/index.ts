import { useRef } from 'react';

/**
 * 返回当前最新值的 Hook，可以避免闭包问题。
 * @param value
 * @returns
 */
export function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}
