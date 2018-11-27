import { Readable } from "./Readable";
import { Interface } from "readline";

export class EnglishReader implements Readable {
    constructor (num: number) {
        this.num = num;
    }
    num: number;
    private names = {
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
    private digits = {
        2: "hundred",
        3: "thousand",
        6: "million",
        9: "billion",
        12: "trillion"
    };
    private solve (target: number) {{
        if (target === 0) return "";
        if (this.names[target]) return this.names[target]; // 既に登録済みの場合
        if (target < 100) {
          // 2桁の場合
          this.names[target] = this.names[target - target%10] + " " + this.names[target%10];
          return this.names[target];
        } else {
            /* 3桁以上の場合 */
            let digitLength = 2;
            /* 桁数を求める */
            while(target >= parseInt(Math.pow(10, digitLength).toString())) digitLength++;
            digitLength--;
            digitLength = digitLength>3? digitLength - digitLength%3: digitLength;
      
            let digitNum = parseInt(Math.pow(10, digitLength).toString());
            if (target % digitNum === 0) {
                this.names[target] = this.solve(parseInt((target / digitNum).toString())) + " " + this.digits[digitLength];
            } else {
                this.names[target] = [this.solve(parseInt((target / digitNum).toString())) + " " + this.digits[digitLength], this.solve(target % digitNum)].join(" and ");
            }
            return this.names[target];
        }
      }
    }
    read () {
        if (this.num === 0) {
            return "zero";
        } else {
            return this.solve(this.num);
        }
    }
}