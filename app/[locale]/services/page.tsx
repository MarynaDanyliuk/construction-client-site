export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Наші послуги</h1>
      <p className="text-gray-700 mb-8">
        Ми пропонуємо повний спектр послуг для вашого будівельного чи інженерного проєкту: від
        проєктування до технічного супроводу.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Проєктування</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Ми створюємо функціональні та естетичні проєкти будь-якої складності, адаптовані до
            ваших потреб.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Будівництво</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Забезпечуємо якісне та безпечне будівництво з використанням сучасних технологій і
            матеріалів.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Технічний нагляд
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Контролюємо виконання робіт на всіх етапах, щоб гарантувати відповідність проєкту та
            стандартам.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Консалтинг</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Консультації та супровід для прийняття обґрунтованих рішень у вашому проєкті.
          </p>
        </div>
      </div>
    </div>
  );
}
