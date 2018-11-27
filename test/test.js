"use strict";

const obj  = require("../dist/index");
const assert = require("assert");

describe("Readable integer default", () => {
  it("converts 0 into zero", () => {
    assert.equal("zero", obj.read(0));
  });
});

describe("Readable integer default", () => {
  it("converts 153.6 into null", () => {
    assert.equal(null, obj.read(153.6));
  });
});

describe("Readable integer default", () => {
  it("converts 'invalid input' into null", () => {
    assert.equal(null, obj.read("invalid input"));
  });
});

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
  it("converts 1030 into 千三十", () => {
    assert.equal("千三十", obj.read(1030, "ja"));
  });
});

describe("Readable integer ja", () => {
  it("converts 10209803 into 一千二十万九千八百三", () => {
    assert.equal("一千二十万九千八百三", obj.read(10209803, "ja"));
  });
});

describe("Readable integer ja", () => {
  it("converts 127001030 into 一億二千七百万一千三十", () => {
    assert.equal("一億二千七百万一千三十", obj.read(127001030, "ja"));
  });
});

describe("Readable integer ja", () => {
  it("converts 85935261518004224 into 八京五千九百三十五兆二千六百十五億一千八百万四千二百二十四", () => {
    assert.equal("八京五千九百三十五兆二千六百十五億一千八百万四千二百二十四", obj.read(85935261518004224, "ja"));
  });
});
