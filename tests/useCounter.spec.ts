import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should update val and increment by new val', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(5);      // เปลี่ยนค่า val
      result.current.increment();    // เพิ่ม count ด้วยค่าใหม่
    });

    expect(result.current.count).toBe(5); // ค่าที่คาดหวัง
  });
});
