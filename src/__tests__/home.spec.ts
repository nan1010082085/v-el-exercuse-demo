import { describe, it } from 'vitest';

describe('Home Spec', () => {
  it('test ok == ok', ({ expect }) => {
    const ok = 'ok';
    expect(ok).toEqual('ok');
  });
});
