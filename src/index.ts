import { Readable } from "./Readable";
import { JapaneseReader } from "./JapaneseReader";
import { EnglishReader } from "./EnglishReader";

export const read = (num: number, locale: string):string => {
    if (locale === "en") {
        return new EnglishReader(num).read();
    }
    if (locale === "ja") {
        return new JapaneseReader(num).read();
    } else {
        return new EnglishReader(num).read();
    }
}
