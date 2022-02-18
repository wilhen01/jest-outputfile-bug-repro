import { helloWorld } from '../src';

describe('hello world function', () => {
  test('returns the correct string', () => {
    const result = helloWorld();
    expect(result).toBe('hello world');
  });
});
