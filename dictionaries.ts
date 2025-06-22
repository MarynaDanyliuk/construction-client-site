export interface Dictionary {
  siteName: string;
  home: string;
  cases: string;
  homeTitle: string;
  homeDescription: string;
  homeCTA: string;
  feature1Title: string;
  feature1Description: string;
  feature2Title: string;
  feature2Description: string;
}

export const dictionaries: Record<"ua" | "en", Dictionary> = {
  ua: {
    siteName: "Служба замовника",
    home: "Головна",
    cases: "Звернення",
    homeTitle: "Служба підтримки замовника",
    homeDescription:
      "Ми допомагаємо вам швидко та зручно вирішити всі ваші питання.",
    homeCTA: "Переглянути звернення",
    feature1Title: "Цілодобова підтримка",
    feature1Description: "Ми завжди поруч — 24/7.",
    feature2Title: "Зручний інтерфейс",
    feature2Description: "Проста й ефективна навігація для користувачів.",
  },
  en: {
    siteName: "Customer Portal",
    home: "Home",
    cases: "Cases",
    homeTitle: "Customer Support",
    homeDescription:
      "We're here to help you solve your issues quickly and easily.",
    homeCTA: "View Cases",
    feature1Title: "24/7 Assistance",
    feature1Description: "We're with you around the clock.",
    feature2Title: "User-Friendly Design",
    feature2Description: "Clear and intuitive navigation for all users.",
  },
};

// export const dictionaries: Record<"ua" | "en", Dictionary> = {
//   ua: {
//     siteName: "Служба Замовника",
//     home: "Головна",
//     cases: "Кейси",
//     homeTitle: "Супровід будівництва під ключ",
//     homeDescription:
//       "Ми представляємо інтереси замовника на всіх етапах будівництва.",
//     homeCTA: "Детальніше",
//     feature1Title: "Проєктування",
//     feature1Description:
//       "Розробка архітектурних та інженерних рішень згідно з ДБН.",
//     feature2Title: "Контроль",
//     feature2Description:
//       "Технічний нагляд та управління проєктом від початку до здачі.",
//   },
//   en: {
//     siteName: "Construction Client Service",
//     home: "Home",
//     cases: "Cases",
//     homeTitle: "Turnkey construction management",
//     homeDescription:
//       "We represent the client's interests at all stages of construction.",
//     homeCTA: "Learn more",
//     feature1Title: "Design",
//     feature1Description:
//       "Development of architectural and engineering solutions according to codes.",
//     feature2Title: "Supervision",
//     feature2Description:
//       "Technical oversight and project management from start to handover.",
//   },
// };

// export const dictionaries = {
//   ua: {
//     home: "Головна",
//     cases: "Кейси",
//     siteName: "Служба Замовника",
//     homeTitle: "Супровід будівництва під ключ",
//     homeDescription:
//       "Ми представляємо інтереси замовника на всіх етапах будівництва.",
//     homeCTA: "Детальніше",
//     feature1Title: "Проєктування",
//     feature1Description:
//       "Розробка архітектурних та інженерних рішень згідно з ДБН.",
//     feature2Title: "Контроль",
//     feature2Description:
//       "Технічний нагляд та управління проєктом від початку до здачі.",
//   },
//   en: {
//     siteName: "Construction Client Service",
//     home: "Home",
//     cases: "Cases",
//     homeTitle: "Turnkey construction management",
//     homeDescription:
//       "We represent the client's interests at all stages of construction.",
//     homeCTA: "Learn more",
//     feature1Title: "Design",
//     feature1Description:
//       "Development of architectural and engineering solutions according to codes.",
//     feature2Title: "Supervision",
//     feature2Description:
//       "Technical oversight and project management from start to handover.",
//   },
// };

// export const dictionaries = {
//   ua: {
//     common: {
//       siteName: "Служба Замовника",
//     },
//     home: {
//       title: "Супровід будівництва під ключ",
//       description:
//         "Ми представляємо інтереси замовника на всіх етапах будівництва.",
//       cta: "Детальніше",
//       feature1: {
//         title: "Проєктування",
//         description:
//           "Розробка архітектурних та інженерних рішень згідно з ДБН.",
//       },
//       feature2: {
//         title: "Контроль",
//         description:
//           "Технічний нагляд та управління проєктом від початку до здачі.",
//       },
//     },
//     navigation: {
//       home: "Головна",
//       cases: "Кейси",
//     },
//   },
//   en: {
//     common: {
//       siteName: "Construction Client Service",
//     },
//     home: {
//       title: "Turnkey construction management",
//       description:
//         "We represent the client's interests at all stages of construction.",
//       cta: "Learn more",
//       feature1: {
//         title: "Design",
//         description:
//           "Development of architectural and engineering solutions according to codes.",
//       },
//       feature2: {
//         title: "Supervision",
//         description:
//           "Technical oversight and project management from start to handover.",
//       },
//     },
//     navigation: {
//       home: "Home",
//       cases: "Cases",
//     },
//   },
// };

// export const dictionaries = {
//   ua: {
//     siteName: "Служба Замовника",
//     home: "Головна",
//     cases: "Кейси",
//     homeTitle: "Супровід будівництва під ключ",
//     homeDescription:
//       "Ми представляємо інтереси замовника на всіх етапах будівництва.",
//     homeCTA: "Детальніше",
//     feature1Title: "Проєктування",
//     feature1Description:
//       "Розробка архітектурних та інженерних рішень згідно з ДБН.",
//     feature2Title: "Контроль",
//     feature2Description:
//       "Технічний нагляд та управління проєктом від початку до здачі.",
//   },
//   en: {
//     siteName: "Construction Client Service",
//     home: "Home",
//     cases: "Cases",
//     homeTitle: "Turnkey construction management",
//     homeDescription:
//       "We represent the client's interests at all stages of construction.",
//     homeCTA: "Learn more",
//     feature1Title: "Design",
//     feature1Description:
//       "Development of architectural and engineering solutions according to codes.",
//     feature2Title: "Supervision",
//     feature2Description:
//       "Technical oversight and project management from start to handover.",
//   },
// };
