const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

// eslint-disable-next-line import/prefer-default-export
module.exports.convertToRoman = function convertToRoman(num) {
  const decimal = parseFloat(num, 10);

  if (!Number.isInteger(decimal) || decimal < 1) {
    throw new TypeError(`'${num}' is not a number`);
  }

  /*
  let romanResult = '';

  Object.keys(romanNumerals).forEach((key) => {
    const value = romanNumerals[key];
    const factor = Math.floor(decimal / value);

    romanResult += key.repeat(factor);
    decimal -= factor * value;
  });
  return romanResult;
  */

  const result = Object.entries(romanNumerals).reduce(
    (acc, [romanKey, romanValue]) => {
      const factor = Math.floor(acc.decimalRest / romanValue);
      acc.romanResult += romanKey.repeat(factor);
      acc.decimalRest -= factor * romanValue;
      return acc;
    },
    {
      romanResult: '',
      decimalRest: decimal,
    },
  );

  return result.romanResult;
};
