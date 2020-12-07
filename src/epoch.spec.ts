import { encode, decode, getCustomEpoch, TimeInterval } from './epoch';

describe(`Test func encode`, () => {
  it('Should match result', () => {
    const result = encode('0123456789', 200);
    expect(result).toBe('200');
  });
  it('Should match result', () => {
    const result = encode(
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
      1555555555,
    );
    expect(result).toBe('1hGx3j');
  });
  it('Should match result', () => {
    const result = encode('01', 8);
    expect(result).toBe('1000');
  });
});

describe(`Test func decode`, () => {
  it('Should match result', () => {
    const result = decode('0123456789', '200');
    expect(result).toBe(200);
  });
  it('Should match result', () => {
    const result = decode(
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
      '1hGx3j',
    );
    expect(result).toBe(1555555555);
  });
  it('Should match result', () => {
    const result = decode('01', '1000');
    expect(result).toBe(8);
  });
});

describe(`Test func getCustomEpoch`, () => {
  it('Should match millisecond result', () => {
    const result = getCustomEpoch(TimeInterval.Millisecond, 1607352734186);
    expect(result).toBe(1607352734186);
  });
  it('Should match second result', () => {
    const result = getCustomEpoch(TimeInterval.Second, 1607352734186);
    expect(result).toBe(1607352734);
  });
  it('Should match minute result', () => {
    const result = getCustomEpoch(TimeInterval.Minute, 1607352734186);
    expect(result).toBe(26789212);
  });
});
