"use strict";

const obj  = require("../lib/index");
const assert = require("assert");

describe("Readable integer en", () => {
  it('converts 0 into zero', () => {
    assert.equal('zero', obj.read(0, "en"));
  });
});

describe("Readable integer en", () => {
  it('converts 11 into eleven', () => {
    assert.equal('eleven', obj.read(11, "en"));
  });
});

describe("Readable integer en", () => {
  it("converts 62 into sixty two", () => {
    assert.equal('sixty two', obj.read(62, "en"));
  });
});

describe("Readable integer en", () => {
  it("converts 153 into one hundred and fifty three", () => {
    assert.equal('one hundred and fifty three', obj.read(153, "en"));
  });
});

describe("Readable integer en", () => {
  it("converts 8439 into eight thousand and four hundred and thirty nine", () => {
    assert.equal('eight thousand and four hundred and thirty nine', obj.read(8439, "en"));
  });
});

describe("Readable integer en", () => {
  it("converts 2035 into two thousand and thirty five", () => {
    assert.equal('two thousand and thirty five', obj.read(2035, "en"));
  });
});

describe("Readable integer en", () => {
  it("converts 90600 into ninety thousand and six hundred", () => {
    assert.equal('ninety thousand and six hundred', obj.read(90600, "en"));
  });
});

describe("Readable integer en", () => {
  it("converts 1100001 into one million and one hundred thousand and one", () => {
    assert.equal('one million and one hundred thousand and one', obj.read(1100001, "en"));
  });
});
