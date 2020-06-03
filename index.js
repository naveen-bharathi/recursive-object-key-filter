/**
 * MIT License
 * Copyright (c) 2020 Naveen Bharathi
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/

/**
 * Filter / Remove keys from an Object | Array recursively.
 *
 * @param {Object|Array} object  object to filter the keys from
 * @param {Array} keysToFilter  array of keys to filter
 * @return {Object}  object same as input but without the specified keys
 */
function recursiveObjectKeyFilter(object, keysToFilter) {
  if (typeof object !== 'object') { throw new TypeError('The parameter \'object\' must be an object.'); }
  if (typeof keysToFilter !== 'object') { throw new TypeError('The parameter \'keysToFilter\' must be an array.'); }

  let resultObj;

  if (Array.isArray(object)) { resultObj = []; } else { resultObj = {}; }

  Object.keys(object).forEach((key) => {
    // eslint-disable-next-line no-bitwise
    if (~keysToFilter.indexOf(key)) { return; }

    if (object[key] != null && typeof object[key] === 'object' && Object.keys(object[key]).length) { resultObj[key] = recursiveObjectKeyFilter(object[key], keysToFilter); } else { resultObj[key] = object[key]; }
  });

  return resultObj;
}

module.exports = recursiveObjectKeyFilter;
