export type Project = {
  name: string;
  description: string;
};

export type Dictionary = {
  siteName: string;
  home: string;
  cases: string;
services: {
  title: string;
  description: string;
  item1Title: string;
  item1Description: string;
  item2Title: string;
  item2Description: string;
  item3Title: string;
  item3Description: string;
  item4Title: string;
  item4Description: string;
};
 about: {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  teamTitle: string;
  team: string[];
};
  contacts: {
    title: string;
    text: string;
    description: string;
    addressTitle: string;
    phoneTitle: string;
    socialTitle: string;
  };
  homeTitle: string;
  homeDescription: string;
  homeCTA: string;
  feature1Title: string;
  feature1Description: string;
  feature2Title: string;
  feature2Description: string;
  feature3Title: string;
  feature3Description: string;
  feature4Title: string;
  feature4Description: string;

portfolio: {
  title: string;
  text: string;
  projects: Project[];
};

  // Order / Contact Form
  orderTitle: string;
  orderDescription: string;
  formName: string;
  formMessage: string;
  formSubmit: string;

  // головні мета-теги для сторінки
  metaTitle: string;
  metaDescription: string;

  // мета-теги для кожної сторінки окремо
  meta: {
    homeTitle: string;
    homeDescription: string;
    servicesTitle: string;
    servicesDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
    portfolioTitle: string;
    portfolioDescription: string;
    orderTitle: string;
    orderDescription: string;
  };
};
