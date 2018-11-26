"use strict";

const obj  = require("../lib/index");
const assert = require("assert");

describe("Readable integer ja", () => {
  it('converts 0 into 〇', () => {
    assert.equal('〇', obj.read(0, "ja"));
  });
});

describe("Readable integer ja", () => {
  it('converts 11 into 十一', () => {
    assert.equal('十一', obj.read(11, "ja"));
  });
});

describe("Readable integer ja", () => {
  it("converts 632 into 六百三十一", () => {
    assert.equal("六百三十一", obj.read(631, "ja"));
  });
});

describe("Readable integer ja", () => {
  it("converts 209803 into 二十万九千八百三", () => {
    assert.equal("二十万九千八百三", obj.read(209803, "ja"));
  });
});

describe("Readable integer ja", () => {
  it("converts 127001030 into 一億二千七百万一千三十", () => {
    assert.equal("一億二千七百万一千三十", obj.read(127001030, "ja"));
  });
});
