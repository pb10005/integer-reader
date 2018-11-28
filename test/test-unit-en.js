"use strict";

const EnglishReader = require("../dist/EnglishReader").EnglishReader;
const assert = require("assert");

describe("new EnglishReader().solve(0)", () => {
    it("returns empty string", () => {
        assert.equal("", new EnglishReader().solve(0));
    });
});

describe("new EnglishReader(0).read()", () => {
    it("returns 'zero'", () => {
        assert.equal("zero", new EnglishReader(0).read());
    });
});

describe("new EnglishReader(-1).read()", () => {
    it("returns null", () => {
        assert.equal(null, new EnglishReader(-1).read());
    });
});