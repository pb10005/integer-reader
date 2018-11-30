import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Digits } from '../src/Digits';

describe('new Digits(0).calcNum()', () => {
  it('returns null', () => {
    assert.equal(null, new Digits(0).calcNum());
  });
});

describe('new Digits(1).calcNum()', () => {
  it('returns null', () => {
    assert.equal(1, new Digits(1).calcNum());
  });
});

describe('new Digits(10).calcNum()', () => {
  it('returns null', () => {
    assert.equal(2, new Digits(10).calcNum());
  });
});
