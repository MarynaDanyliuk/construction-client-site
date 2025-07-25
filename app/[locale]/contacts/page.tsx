// app/[locale]/contacts/page.tsx

import { getDictionary } from '../../dictionaries';
import MetaHead from '@/app/components/MetaHead';

type ContactsPageProps = {
  params: { locale: 'uk' | 'en' };
};

export default async function ContactsPage({ params }: ContactsPageProps) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <>
      <MetaHead
        title={
          locale === 'uk'
            ? 'Служба замовника — Контакти'
            : 'Construction Client Service — Contacts'
        }
        description={
          locale === 'uk'
            ? 'Контакти Служби замовника: адреса, телефон, email, соціальні мережі.'
            : 'Contact Construction Client Service: address, phone, email, social media.'
        }
        localeCode={locale}
      />

      <section className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">{t.contacts.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{t.contacts.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">{t.contacts.addressTitle}</h2>
            <p className="text-gray-600 dark:text-gray-400">
              вул. Прикладна, 123
              <br />
              Київ, Україна
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{t.contacts.phoneTitle}</h2>
            <p className="text-gray-600 dark:text-gray-400">+380 (44) 123-45-67</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-gray-600 dark:text-gray-400">info@example.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{t.contacts.socialTitle}</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://t.me/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
