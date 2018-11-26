"use strict";

const names = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "七",
  8: "八",
  9: "九"
};
const digits = {
  1: "十",
  2: "百",
  3: "千",
  4: "万",
  8: "億",
  12: "兆",
  16: "京"
};

const solve = (num) => {
  if (num === 0) return "";
  if (names[num]) return names[num]; // 既に登録済みの場合
  else {
    /* 2桁以上の場合 */
    let digitLength = 1;

    /* 桁数を求める */
    while(num >= parseInt(Math.pow(10, digitLength))) digitLength++;
    digitLength--;
    digitLength = digitLength>4? digitLength - digitLength%4: digitLength;

    let digitNum = parseInt(Math.pow(10, digitLength)); // numを超えない最大の10のべき乗

    let res = solve(parseInt(num / digitNum));
    res = res === "一"? "": res; // 一がつくときの扱いが大事
    return [res + digits[digitLength], solve(num % digitNum)].join("");
  }
}

const read = (num) => {
  if (num === 0) {
   return "〇";
  } else {
   return solve(num);
  }
}

module.exports = read;
