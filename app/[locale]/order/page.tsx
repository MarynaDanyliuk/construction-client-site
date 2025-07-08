// app/[locale]/order/page.tsx

import { getDictionary } from '../../dictionaries';

type OrderPageProps = {
  params: { locale: 'uk' | 'en' };
};

export default async function OrderPage({ params }: OrderPageProps) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{t.orderTitle || 'Замовити послугу'}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {t.orderDescription || 'Заповніть форму і ми звʼяжемося з вами найближчим часом.'}
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold">
            {t.formName || 'Ваше імʼя'}
          </label>
          <input type="text" id="name" name="name" required className="w-full border rounded p-2" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-semibold">
            {t.formMessage || 'Ваше повідомлення'}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
        >
          {t.formSubmit || 'Надіслати'}
        </button>
      </form>
    </div>
  );
}
