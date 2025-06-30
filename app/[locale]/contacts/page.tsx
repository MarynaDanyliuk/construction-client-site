// app/[locale]/contacts/page.tsx

import type { Dictionary } from '../../dictionaries/types';

type ContactsPageProps = {
  params: { locale: 'uk' | 'en' };
};

import { getDictionary } from '../../dictionaries';

export default async function ContactsPage({ params }: ContactsPageProps) {
  const t: Dictionary = await getDictionary(params.locale);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{t.contact.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {t.contact.description ||
          'Ми завжди на звʼязку, звʼяжіться з нами зручним для вас способом.'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">{t.contact.addressTitle || 'Адреса'}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            вул. Прикладна, 123
            <br />
            Київ, Україна
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">{t.contact.phoneTitle || 'Телефон'}</h2>
          <p className="text-gray-600 dark:text-gray-400">+380 (44) 123-45-67</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-600 dark:text-gray-400">info@example.com</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {t.contact.socialTitle || 'Соціальні мережі'}
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://t.me/example"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/example"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
