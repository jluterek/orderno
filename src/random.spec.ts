import { mockRandom } from 'jest-mock-random';
import random from './random';

describe(`Test random`, () => {
  it('Should match result for default values', () => {
    mockRandom([0.01, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    const charSet: string = '0123456789';
    const result = random(charSet, 10);
    expect(result).toBe('0123456789');
  });
  it('Should match result for default values', () => {
    mockRandom([0.01, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    const charSet: string = '01';
    const result = random(charSet, 10);
    expect(result).toBe('0000011111');
  });
});
