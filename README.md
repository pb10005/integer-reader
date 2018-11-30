# Integer Reader

[![npm version](https://badge.fury.io/js/integer-reader.svg)](https://badge.fury.io/js/integer-reader) [![Build Status](https://travis-ci.org/pb10001/integer-reader.svg?branch=master)](https://travis-ci.org/pb10001/integer-reader) [![Maintainability](https://api.codeclimate.com/v1/badges/18fb8ee4a3e70f94a644/maintainability)](https://codeclimate.com/github/pb10001/integer-reader/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/18fb8ee4a3e70f94a644/test_coverage)](https://codeclimate.com/github/pb10001/integer-reader/test_coverage) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

## Summary

A JS library written in TypeScript which converts an integer into words.

## Usage

### Install

```sh
npm i integer-reader
```

### Use

```javascript
const reader = require('integer-reader');
// English
console.log(reader.read(150, 'en')); // => one hundred and fifty
// Japanese
console.log(reader.read(150, 'ja')); // => 百五十
```

## Development

### build

```sh
npm run build
```

### watch

```sh
npm run watch
```

### test

```sh
npm test
```
