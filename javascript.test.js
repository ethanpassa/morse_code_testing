// const { morseTranslate } = require('./good-js.js');
const {
  englishTranslate
} = require('./morse-code-translator.js');
const {
  morseTranslate
} = require('./morse-code-translator.js');
const {
  expect,
  test,
  it
} = require('@jest/globals');

describe('Translates English to Morse', () => {
  test('value is undefined', () => {
    expect(() => englishTranslate(undefined).toThrowError(undefinedError));
  });
  it("Should return a string", () => {
    const testIfString = typeof englishTranslate('abc') === "string";
    expect(testIfString).toBe(true);
  });
  test('Translates English to Morse', () => {
    expect(englishTranslate('e')).toEqual('.');
    expect(englishTranslate('ea')).toEqual('. .-');
    expect(englishTranslate('')).toEqual('');
    expect(englishTranslate('e')).toBeDefined();
  });
  test('Handles multiple word inputs', () => {
    expect(englishTranslate('e a')).toEqual('. / .-');
  });
});

describe('Translates Morse to English', () => {
  test('value is undefined', () => {
    expect(() => morseTranslate(undefined).toThrowError(undefinedError));
  });

  it("Should return a string", () => {
    const testIfString = typeof morseTranslate('.- -..- -.-.') === "string";
    expect(testIfString).toBe(true);
  });
  test('Translates English to Morse', () => {
    expect(morseTranslate('.-')).toEqual('a');
    expect(morseTranslate('.- -...')).toEqual('ab');
    expect(morseTranslate('')).toEqual('');
    expect(morseTranslate('.-')).toBeDefined();
  });
  test('Handles multiple word inputs', () => {
    expect(morseTranslate('.- / -...')).toEqual('a b');
  });
});