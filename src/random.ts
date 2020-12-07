export default function randomString(charSet: string, length: number) {
  let result: string = '';
  let charSetLength: number = charSet.length;
  for (var i = 0; i < length; i++) {
    result += charSet.charAt(Math.floor(Math.random() * charSetLength));
  }
  return result;
}
