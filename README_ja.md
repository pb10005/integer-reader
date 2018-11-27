# Integer Reader
[![Build Status](https://travis-ci.org/pb10001/integer-reader.svg?branch=master)](https://travis-ci.org/pb10001/integer-reader)
[![Maintainability](https://api.codeclimate.com/v1/badges/18fb8ee4a3e70f94a644/maintainability)](https://codeclimate.com/github/pb10001/integer-reader/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/18fb8ee4a3e70f94a644/test_coverage)](https://codeclimate.com/github/pb10001/integer-reader/test_coverage)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
## 概要
0以上の整数を入力して、読み方を返します。
## 使い方
### インストール
```sh
npm i integer-reader
```
### 使用
```javascript
const reader = require('integer-reader');
// 英語
console.log(reader.read(150, "en")); // => one hundred and fifty
// 日本語
console.log(reader.read(150, "ja")); // => 百五十
```
## 開発
### ビルド
```sh
npm run build
```
### 自動コンパイル
```sh
npm run watch
```
### テスト
```sh
npm test
```
