"use strict";

const JapaneseReader = require("../dist/JapaneseReader").JapaneseReader;
const assert = require("assert");

describe("new JapaneseReader().solve(0)", () => {
    it("returns empty string", () => {
        assert.equal("", new JapaneseReader().solve(0));
    });
});

describe("new JapaneesReader(0).read()", () => {
    it("returns '〇'", () => {
        assert.equal("〇", new JapaneseReader(0).read());
    });
});