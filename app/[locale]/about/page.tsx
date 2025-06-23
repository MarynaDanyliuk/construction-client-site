export default function AboutPage() {
  return <div>About us</div>;
}

// import { dictionaries } from "../../../dictionaries";
// import type { Metadata } from "next";

// type Props = { params: { locale: "ua" | "en" } };

// export function generateMetadata({ params }: Props): Metadata {
//   const t = dictionaries[params.locale] ?? dictionaries["ua"];
//   return {
//     title: t.meta.aboutTitle,
//     description: t.meta.aboutDescription,
//   };
// }

// export default function AboutPage({ params }: Props) {
//   const t = dictionaries[params.locale];

//   return (
//     <section>
//       <h1>{t.about.title}</h1>
//       <p>{t.about.text}</p>
//     </section>
//   );
// }
