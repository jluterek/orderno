import orderno from './orderno';
import { TimeInterval } from './epoch';
import MockDate from 'mockdate';
import { mockRandom } from 'jest-mock-random';

describe(`Test order`, () => {
  it('Should match result for default values', () => {
    MockDate.set(1607357896);
    mockRandom([0.1, 0.2, 0.3, 0.4]);
    const result = orderno();
    expect(result).toBe('1kmJDM6CIO');
    MockDate.reset();
  });
  it('Should match result for custom values', () => {
    MockDate.set(1607357896);
    mockRandom([0.1, 0.2, 0.3, 0.4]);
    const result = orderno(
      '2346789ABCDEFGHJKLMNPQRTUVWXYZabcdefghijkmnopqrstuvwxyz',
      TimeInterval.Second,
      2,
    );
    expect(result).toBe('CgNh8E');
    MockDate.reset();
  });
});
