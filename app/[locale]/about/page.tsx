export default function AboutPage() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Про нас</h1>
      <p className="mb-4">
        Ми — команда професіоналів, яка пропонує комплексні послуги у сфері будівництва,
        проєктування та ремонту. Наш підхід заснований на прозорості, відповідальності та високих
        стандартах якості.
      </p>
      <p className="mb-4">
        Ми супроводжуємо кожен проєкт від ідеї до реалізації, допомагаючи замовникам приймати
        ефективні рішення на всіх етапах. Наша мета — створювати простори, у яких буде приємно жити
        та працювати.
      </p>
      <p className="mb-8">
        Обираючи нас, ви отримуєте надійного партнера для реалізації будівельних рішень будь-якої
        складності.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Наша команда</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: 'Олексій — Архітектор' },
          { name: 'Марина — Дизайнер' },
          { name: 'Ігор — Інженер' },
          { name: 'Світлана — Менеджер проєктів' },
        ].map((member, index) => (
          <li key={index} className="flex flex-col items-center">
            <div className="w-full aspect-square rounded-xl border-2 border-gray-300 bg-gray-100 flex items-center justify-center text-gray-500 text-center text-sm p-2 shadow">
              Фото
            </div>
            <p className="text-center mt-2">{member.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
