import { Readable } from "./Readable";

export class JapaneseReader implements Readable {
    constructor (num: number) {
        this.num = num;
    }
    num: number;
    private names = {
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
    private digits = {
        1: "十",
        2: "百",
        3: "千",
        4: "万",
        8: "億",
        12: "兆",
        16: "京"
    };
    private solve (target: number, depth: number) {
        if (target === 0) return "";
        if (this.names[target]) return this.names[target]; // 既に登録済みの場合
        else {
            /* 2桁以上の場合 */
            let d = 1;
        
            /* 桁数を求める */
            while(target >= parseInt(Math.pow(10, d).toString())) d++;
            d--;
            let digitLength: number = d > 4 ? d - d % 4 : d;
            let digitNum: number = parseInt(Math.pow(10, digitLength).toString()); // numを超えない最大の10のべき乗
            let res: string = this.solve(parseInt((target / digitNum).toString()), depth + 1); // 一番上の桁
            if (res === "一") {
                if (d === 3 && depth === 0) res = "";
                if (digitLength < 3) res = "";
            }
            this.names[target] = [res + this.digits[digitLength], this.solve(target % digitNum, depth+1)].join("");
            return this.names[target];
        }
    }
    read () {
        if (this.num === 0) {
            return "〇";
        } else {
            return this.solve(this.num, 0);
        }
    }
}