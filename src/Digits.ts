export class Digits {
  private num;
  constructor(num: number) {
    this.num = num;
  }
  public calcNum(): number {
    if (this.num > 0) {
      /* 2桁以上の場合 */
      let d = 1;

      /* 桁数を求める */
      while (this.num >= Math.floor(Math.pow(10, d))) {
        d++;
      }
      return d - 1;
    } else {
      return null;
    }
  }
}
