import { IReadableInteger } from './IReadableInteger';
import { ReadableEnglishInteger } from './ReadableEnglishInteger';
import { ReadableJapaneseInteger } from './ReadableJapaneseInteger';

export const read = (num: number, locale?: string): string => {
  let reader: IReadableInteger;
  if (num !== Math.floor(num)) {
    return null;
  } else if (locale === 'en') {
    reader = new ReadableEnglishInteger(num);
  } else if (locale === 'ja') {
    reader = new ReadableJapaneseInteger(num);
  } else {
    reader = new ReadableEnglishInteger(num);
  }
  return reader.read();
};
