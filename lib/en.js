"use strict";

const names = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
};
const digits = {
  2: "hundred",
  3: "thousand",
  6: "million",
  9: "billion",
  12: "trillion"
};

const solve = (num) => {
  if (num === 0) return "";
  if (names[num]) return names[num]; // 既に登録済みの場合
  if (num < 100) {
    // 2桁の場合
    names[num] = names[num - num%10] + " " + names[num%10];
    return names[num];
  } else {
      /* 3桁以上の場合 */
      let digitLength = 2;
      /* 桁数を求める */
      while(num >= parseInt(Math.pow(10, digitLength))) digitLength++;
      digitLength--;
      digitLength = digitLength>3? digitLength - digitLength%3: digitLength;

      let digitNum = parseInt(Math.pow(10, digitLength));
      if (num % digitNum === 0) return solve(parseInt(num / digitNum)) + " " + digits[digitLength];
      return [solve(parseInt(num / digitNum)) + " " + digits[digitLength], solve(num % digitNum)].join(" and ");
  }
}

const read = (num) => {
  if (num === 0) {
   return "zero";
  } else {
   return solve(num);
  }
}

module.exports = read;
