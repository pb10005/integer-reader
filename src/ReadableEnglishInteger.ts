import { Digits } from './Digits';
import { IReadableInteger } from './IReadableInteger';

export class ReadableEnglishInteger implements IReadableInteger {
  public num: number;
  private names = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };
  private digits = {
    2: 'hundred',
    3: 'thousand',
    6: 'million',
    9: 'billion',
    12: 'trillion'
  };
  constructor(num: number) {
    this.num = num;
  }
  public read(): string {
    if (this.num === 0) {
      return 'zero';
    } else if (this.num > 0) {
      return this.solve(this.num);
    } else {
      return null;
    }
  }
  private solve(target: number): string {
    if (target === 0 || this.names[target]) {
      return this.names[target];
    }
    if (target < 100) {
      // 2桁の場合
      this.names[target] =
        this.names[target - (target % 10)] + ' ' + this.names[target % 10];
    } else {
      /* 3桁以上の場合 */
      let digitLength = new Digits(target).calcNum() - 1;
      digitLength =
        digitLength > 3 ? digitLength - (digitLength % 3) : digitLength;

      const digitNum = Math.floor(Math.pow(10, digitLength));
      const topSolution = this.solve(Math.floor(target / digitNum));
      const restSolution = this.solve(target % digitNum);
      if (target % digitNum === 0) {
        this.names[target] = topSolution + ' ' + this.digits[digitLength];
      } else {
        this.names[target] = [
          topSolution + ' ' + this.digits[digitLength],
          restSolution
        ].join(' and ');
      }
    }
    return this.names[target];
  }
}
