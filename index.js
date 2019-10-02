const roman = require('./src/roman.js');

const myArgs = process.argv.slice(2);
myArgs.forEach((arg) => {
  try {
    console.log(`${arg} : ${roman.convertToRoman(arg)}`);
  } catch (error) {
    console.log(`${arg} : is not a valid integer`);
  }
});
