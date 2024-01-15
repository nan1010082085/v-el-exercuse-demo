import { describe, it } from 'vitest';

describe('Home Test', () => {
  it('test ok is number == 1', ({ expect }) => {
    const ok = 1;
    expect(ok).toEqual(1);
  })
})
