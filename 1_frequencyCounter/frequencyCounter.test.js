const { expect } = require('@jest/globals');
const same = require('./frequencyCounter');

test('배열 [1, 2, 3]과 [1, 4, 9]가 주어지면 true를 반환한다', () => {
  expect(same([1, 2, 3], [1, 4, 9])).toBe(true);
});

test('배열 [1, 2, 3]과 [1, 9]가 주어지면 false를 반환한다', () => {
  expect(same([1, 2, 3], [1, 9])).toBe(false);
});

test('배열 [1, 2, 1]과 [1, 4, 4]가 주어지면 false를 반환한다', () => {
  expect(same([1, 2, 1], [1, 4, 4])).toBe(false);
});

test('배열 [3, 7, 2]과 [49, 4, 9]가 주어지면 true를 반환한다', () => {
  expect(same([3, 7, 2], [49, 4, 9])).toBe(true);
});

test('배열 [100, 100, 100]과 [10000, 10000, 10000]가 주어지면 true를 반환한다', () => {
  expect(same([100, 100, 100], [10000, 10000, 10000])).toBe(true);
});
