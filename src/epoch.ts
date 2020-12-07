export enum TimeInterval {
  Minute,
  Second,
  Millisecond,
}

export function getEncodedEpoch(interval: TimeInterval, charSet: string) {
  return encode(charSet, getCustomEpoch(interval, Date.now()));
}

export function getCustomEpoch(interval: TimeInterval, dateNow: number): number {
  let epoch: number = dateNow;
  if (interval === TimeInterval.Millisecond) {
    return epoch;
  }
  if (interval === TimeInterval.Second) {
    return Math.floor(epoch / 1000); // Convert to seconds
  }
  return Math.floor(epoch / 60000); // convert to minute 1000 * 60
}

export function encode(charSet: string, value: number): string {
  let rixit: number; // digit in a non-decimal radix
  let residual: number;
  let result: string;
  let rixitLen: number;
  residual = Math.floor(value);
  result = '';
  rixitLen = charSet.length;
  do {
    rixit = residual % rixitLen;
    result = charSet.charAt(rixit) + result;
    residual = Math.floor(residual / rixitLen);
  } while (residual !== 0);
  return result;
}

export function decode(charSet: string, value: string): number {
  let result: number = 0;
  for (let e = 0; e < value.length; e++) {
    result = result * charSet.length + charSet.indexOf(value[e]);
  }
  return result;
}
