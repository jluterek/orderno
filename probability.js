let charSet = '2346789ABCDEFGHJKLMNPQRTUVWXYZabcdefghijkmnopqrstuvwxyz';
let randomLength = 10;
let IDsPerSecond = 100;

for (let x = 2; x <= 10; x++) {
  randomLength = x;
  console.log('For length of ' + x);
  let num = Math.pow(charSet.length, randomLength);
  //console.log(Math.sqrt(Math.log(0.99) * -2 * num));
  console.log(Math.sqrt(Math.log(0.9999) * -2 * num));
  console.log(Math.sqrt(Math.log(0.99999) * -2 * num));
}
