import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ReadableJapaneseInteger } from '../src/ReadableJapaneseInteger';

describe('new EnglishReader(0).num', () => {
  it('returns 0', () => {
    assert.equal(0, new ReadableJapaneseInteger(0).num);
  });
});

describe('new JapaneesReader(0).read()', () => {
  it('returns 〇', () => {
    assert.equal('〇', new ReadableJapaneseInteger(0).read());
  });
});

describe('new JapaneesReader(-1).read()', () => {
  it('returns null', () => {
    assert.equal(null, new ReadableJapaneseInteger(-1).read());
  });
});
