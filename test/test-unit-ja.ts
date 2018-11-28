import { assert } from 'chai';
import { describe, it } from 'mocha';
import { JapaneseReader } from '../src/JapaneseReader';

describe('new JapaneesReader(0).read()', () => {
  it('returns 〇', () => {
    assert.equal('〇', new JapaneseReader(0).read());
  });
});

describe('new JapaneesReader(-1).read()', () => {
  it('returns null', () => {
    assert.equal(null, new JapaneseReader(-1).read());
  });
});
