"use strict";

const ja = require("./ja");
const en = require("./en");

module.exports = {
   read (num, locale) {
     let val = parseInt(num);
     let func = en;

     // 言語の選択
     if (locale === "en") func = en;
     else if (locale === "ja") func = ja;

     if (val >= 0) {
       return func(val);
     } else {
       return null;
     }
   }
}
