import { sortMessages } from './sortMessages';

import { assert } from 'chai';

describe('Test for sortMessages util', () => {
  it('should return array', () => {
    assert.typeOf(sortMessages([]), 'array');
  });
});
