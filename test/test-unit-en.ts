import { assert } from 'chai';
import { describe, it } from 'mocha';
import { EnglishReader } from '../src/EnglishReader';

describe('new EnglishReader(0).num', () => {
  it('returns 0', () => {
    assert.equal(0, new EnglishReader(0).num);
  });
});

describe('new EnglishReader(0).read()', () => {
  it('returns zero', () => {
    assert.equal('zero', new EnglishReader(0).read());
  });
});

describe('new EnglishReader(-1).read()', () => {
  it('returns null', () => {
    assert.equal(null, new EnglishReader(-1).read());
  });
});
