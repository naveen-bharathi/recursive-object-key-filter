![tests](https://github.com/naveen-bharathi/recursive-object-key-filter/workflows/tests/badge.svg?event=push) ![License](https://badgen.net/npm/license/@naveen-bharathi%2Frecursive-object-key-filter?color=blue) ![GitHub issues](https://img.shields.io/github/issues/naveen-bharathi/recursive-object-key-filter) ![weekly downloads](https://badgen.net/npm/dw/@naveen-bharathi%2Frecursive-object-key-filter?color=blue&icon=npm) ![dependents](https://badgen.net/npm/dependents/@naveen-bharathi%2Frecursive-object-key-filter?color=green) ![publish size](https://badgen.net/bundlephobia/minzip/@naveen-bharathi/recursive-object-key-filter?color=blue) 


# recursive-object-key-filter

Filter / Remove keys from object recursively.

## Installation

if you are using npm, run
```
npm install --save @naveen-bharathi/recursive-object-key-filter
```

or

if you are using yarn package manager, run
```
yarn add @naveen-bharathi/recursive-object-key-filter
```

## Example

Remove the key **`__typename`** from an object.

```javascript
import filter from '@naveen-bharathi/recursive-object-key-filter'; // ES6
// or
const filter = require('@naveen-bharathi/recursive-object-key-filter'); // ES5

const dirtyObject = {
  'id': '12345',
  'name': 'javascript',
  '__typename': 'language'
};

console.log(dirtyObject);
// outputs ==> { 'id': '12345', 'name': 'javascript', '__typename': 'language' }

const cleanObject = filter(dirtyObject, ['__typename']);

console.log(cleanObject);
// outputs ==> { 'id': '12345', 'name': 'javascript'}
```

Remove any of the keys **`__typename`** , **`id`** from an object.

```javascript
import filter from '@naveen-bharathi/recursive-object-key-filter'; // ES6
// or
const filter = require('@naveen-bharathi/recursive-object-key-filter'); // ES5

const dirtyObject = {
  'id': '12345',
  'name': 'javascript',
  '__typename': 'language',
  'books': [
    {
      'name': 'Learn JS',
      'author': 'Naveen Bharathi',
      '__typename': 'book'
    },
    {
      'name': 'A guide to TS',
      'author': 'Naveen',
      '__typename': 'book'
    }
  ]
};

console.log(dirtyObject);
/* outputs ==>  
  {
    'id': '12345',
    'name': 'javascript',
    '__typename': 'language',
    'books': [
      {
        'name': 'Learn JS',
        'author': 'Naveen Bharathi',
        '__typename': 'book'
      },
      {
        'name': 'A guide to TS',
        'author': 'Naveen',
        '__typename': 'book'
      }
    ]
  }
*/

const cleanObject = filter(dirtyObject, ['__typename', 'id']);

console.log(cleanObject);
/* outputs ==>  
  {
    'name': 'javascript',
    'books': [
      {
        'name': 'Learn JS',
        'author': 'Naveen Bharathi',
      },
      {
        'name': 'A guide to TS',
        'author': 'Naveen',
      }
    ]
  }
*/
```

## Parameters

#### filter(object, keysToFilter)
- **object** **{Object | Array}** - object you want to filter the keys from.
- **keysToFilter** **{Array}** - Array of keys you want to filter / remove in the object passed.


## Tests

![tests](https://github.com/naveen-bharathi/recursive-object-key-filter/workflows/tests/badge.svg?event=push)


## Open Issues

![GitHub issues](https://img.shields.io/github/issues/naveen-bharathi/recursive-object-key-filter)


## LICENSE

MIT License

Copyright (c) 2020 Naveen Bharathi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
