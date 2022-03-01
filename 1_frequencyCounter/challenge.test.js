const { expect } = require('@jest/globals');
const validAnagram = require('./challenge');

test(`''와 ''이 입력되면 true`, () => {
  expect(validAnagram('', '')).toBe(true);
});
test(`'aaz'와 'zza'이 입력되면 false`, () => {
  expect(validAnagram('aaz', 'zza')).toBe(false);
});
test(`'anagram'와 'nagaram'이 입력되면 true`, () => {
  expect(validAnagram('anagram', 'nagaram')).toBe(true);
});
test(`'rat'와 'car'이 입력되면 false`, () => {
  expect(validAnagram('rat', 'car')).toBe(false);
});
test(`'awesome'와 'awesom'이 입력되면 false`, () => {
  expect(validAnagram('awesome', 'awesom')).toBe(false);
});
test(`'qwerty'와 'qeywrt'이 입력되면 true`, () => {
  expect(validAnagram('qwerty', 'qeywrt')).toBe(true);
});
test(`'testtwisttime'와 'timetwisttest'이 입력되면 true`, () => {
  expect(validAnagram('testtwisttime', 'timetwisttest')).toBe(true);
});
