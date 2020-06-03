/* eslint-disable max-len */
/* eslint-disable no-undef */
const assert = require('assert');
const filter = require('../index');

const dirtyObject1 = {
  1: 1,
  2: 2,
  3: 3,
  __key: 'some value ...',
  4: 4,
  5: 5,
  6: 6,
  useless_key: 'some value...',
  array: [
    {
      1: 1,
      2: 2,
      3: 3,
      __key: 'some value ...',
      4: 4,
      5: 5,
      6: 6,
      useless_key: 'some value...',
    }, {
      __key: 'some value ...',
      4: 4,
      5: 5,
      6: 6,
      useless_key: 'some value...',
    },
  ],
};
const cleanObject1 = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  array: [
    {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
    }, {
      4: 4,
      5: 5,
      6: 6,
    },
  ],
};
const dirtyObjectKeysToRemove = ['useless_key', '__key'];

test('Should return an error if the passed parameter is not an object', async () => {
  expect(() => filter('dirtyObject1', dirtyObjectKeysToRemove)).toThrow();
});

test('After removing the keys from dirtyObject1, the result should match with cleanObject1', async () => {
  expect(() => assert.deepStrictEqual(filter(dirtyObject1, dirtyObjectKeysToRemove), cleanObject1)).not.toThrow();
});
