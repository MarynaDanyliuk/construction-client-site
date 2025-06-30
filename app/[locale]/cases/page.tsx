export default function PortfolioPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Наші проєкти</h1>
      <p className="text-gray-700 mb-8">
        Тут ви можете ознайомитися з прикладами наших реалізованих рішень та завершених об'єктів. Ми
        пишаємося кожним проєктом, який допоміг нашим клієнтам досягти мети.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Житловий комплекс «Сонячний»
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Повний супровід будівництва: від розробки проєкту до здачі в експлуатацію.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Бізнес-центр «Skyline»
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Реалізація інноваційних інженерних рішень у сучасному комерційному просторі.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Реконструкція школи №12
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Безпека, комфорт та сучасні технології для освітнього закладу.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Магазин «Eco Market»
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Оптимізація простору і впровадження енергоефективних рішень.
          </p>
        </div>
      </div>
    </div>
  );
}
