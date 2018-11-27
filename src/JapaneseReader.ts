import { Readable } from './Readable';
import { runInThisContext } from 'vm';

export class JapaneseReader implements Readable {
    public num: number;
    private names = {
        0: '',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '七',
        8: '八',
        9: '九',
    };
    private digits = {
        1: '十',
        2: '百',
        3: '千',
        4: '万',
        8: '億',
        12: '兆',
        16: '京',
        20: '垓',
        24: '秭',
        28: '穣',
        32: '溝',
        36: '澗',
        40: '正',
        44: '載',
        48: '極',
        52: '恒河沙',
        56: '阿僧祇',
        60: '那由他',
        64: '不可思議',
        68: '無量大数',
    };
    constructor(num: number) {
        this.num = num;
    }
    public read() {
        if (this.num === 0) {
            return '〇';
        } else if (this.num > 0) {
            console.log(this.num.toString());
            return this.solve(this.num, 0);
        } else {
            return null;
        }
    }
    private solve(target: number, depth: number) {
        if (target !== 0 && !this.names[target]) {
            /* 2桁以上の場合 */
            let d = 1;

            /* 桁数を求める */
            while (target >= Math.floor(Math.pow(10, d))) { d++; }
            d--;
            const digitLength: number = d > 4 ? d - d % 4 : d;
            const digitNum: number = Math.floor(Math.pow(10, digitLength)); // numを超えない最大の10のべき乗
            let res: string = this.solve(Math.floor(target / digitNum), depth + 1); // 一番上の桁(四桁区切り)
            if (res === '一') {
                if (d === 3 && depth === 0) { res = ''; }
                if (digitLength < 3) { res = ''; }
            }
            this.names[target] = [res + this.digits[digitLength], this.solve(target % digitNum, depth + 1)].join('');
        }
        return this.names[target];
    }
}
