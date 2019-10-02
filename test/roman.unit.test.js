const roman = require('../src/roman.js');

test('should not accept non-numbers', () => {
  expect(() => {
    roman.convertToRoman('not a number');
  }).toThrow(TypeError);
});

test('should not accept numbers below 1', () => {
  expect(() => {
    roman.convertToRoman(0);
  }).toThrowError(/0/);
});

test('should handle low number', () => {
  expect(roman.convertToRoman(1)).toBe('I');
});

test('should handle double digit number', () => {
  expect(roman.convertToRoman(15)).toBe('XV');
});

test('should handle large numbers', () => {
  expect(roman.convertToRoman(1776)).toBe('MDCCLXXVI');
});

test('should handle shorthand', () => {
  expect(roman.convertToRoman(94)).toBe('XCIV');
});

test('should convert values to integer if possible', () => {
  expect(roman.convertToRoman('9')).toBe('IX');
});
