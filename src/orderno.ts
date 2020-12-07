import { getEncodedEpoch, TimeInterval } from './epoch';
import randomString from './random';

export default function orderno(
  charSet: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  interval: TimeInterval = TimeInterval.Millisecond,
  randomLength: number = 4,
) {
  return getEncodedEpoch(interval, charSet) + randomString(charSet, randomLength);
}
