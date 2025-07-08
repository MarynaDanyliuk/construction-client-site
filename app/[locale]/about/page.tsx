import { getDictionary } from '../../dictionaries';

type AboutPageProps = {
  params: { locale: 'uk' | 'en' };
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = params;
  const t = await getDictionary(locale);

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t.about.title}</h1>
      <p className="mb-4">{t.about.text1}</p>
      <p className="mb-4">{t.about.text2}</p>
      <p className="mb-8">{t.about.text3}</p>

      <h2 className="text-2xl font-semibold mb-4">{t.about.teamTitle}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {t.about.team.map((member, index) => (
          <li key={index} className="flex flex-col items-center">
            <div className="w-full aspect-square rounded-xl border-2 border-gray-300 bg-gray-100 flex items-center justify-center text-gray-500 text-center text-sm p-2 shadow">
              Фото
            </div>
            <p className="text-center mt-2">{member}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}



// // app/[locale]/about/page.tsx

// import { getDictionary } from '../../dictionaries';

// type AboutPageProps = {
//    params: Promise<{ locale: 'uk' | 'en' }>;
// };

// export default async function AboutPage({ params }: AboutPageProps) {
//   const { locale } = await params;
//   const t = await getDictionary(locale);

//   return (
//     <section className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">{t.about.title}</h1>
//       <p className="mb-4">{t.about.text1}</p>
//       <p className="mb-4">{t.about.text2}</p>
//       <p className="mb-8">{t.about.text3}</p>

//       <h2 className="text-2xl font-semibold mb-4">{t.about.teamTitle}</h2>
//       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {t.about.team.map((member, index) => (
//           <li key={index} className="flex flex-col items-center">
//             <div className="w-full aspect-square rounded-xl border-2 border-gray-300 bg-gray-100 flex items-center justify-center text-gray-500 text-center text-sm p-2 shadow">
//               Фото
//             </div>
//             <p className="text-center mt-2">{member}</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
