import ua from "./ua";
import en from "./en";
import type { Dictionary } from "./types"; // якщо в тебе є спільний інтерфейс

export async function getDictionary(locale: "ua" | "en"): Promise<Dictionary> {
  switch (locale) {
    case "en":
      return en;
    case "ua":
      return ua;
    default:
      return ua;
  }
}

// import { ua } from "./ua";
// import { en } from "./en";

// export const dictionaries = {
//   ua,
//   en,
// };
