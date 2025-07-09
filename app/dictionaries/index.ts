import uk from './uk';
import en from './en';
import type { Dictionary } from './types';

export function getDictionary(locale: 'uk' | 'en'): Dictionary {
  switch (locale) {
    case 'en':
      return en;
    case 'uk':
      return uk;
    default:
      return uk;
  }
}


