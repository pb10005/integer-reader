import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ReadableEnglishInteger } from '../src/ReadableEnglishInteger';

describe('new EnglishReader(0).num', () => {
  it('returns 0', () => {
    assert.equal(0, new ReadableEnglishInteger(0).num);
  });
});

describe('new EnglishReader(0).read()', () => {
  it('returns zero', () => {
    assert.equal('zero', new ReadableEnglishInteger(0).read());
  });
});

describe('new EnglishReader(-1).read()', () => {
  it('returns null', () => {
    assert.equal(null, new ReadableEnglishInteger(-1).read());
  });
});
