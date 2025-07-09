
import { posts } from "../../lib/posts";
import Link from "next/link";
import { getDictionary } from "@/app/dictionaries";
import { Locale } from "@/i18n-config";
import MetaHead from "@/app/components/MetaHead";

type BlogPageProps = {
  params: { locale: Locale };
};


export default async function BlogPage({ params }: BlogPageProps) {
  const dict =  getDictionary(params.locale);
  const { locale } = params;

  return (
    <>
         <MetaHead
        title={
          locale === 'uk'
            ? 'Служба замовника — Блог'
            : 'Construction Client Service — Blog'
        }
        description={
          locale === 'uk'
            ? 'Читайте статті та поради щодо супроводу будівництва, управління проєктами та інновацій у сфері.'
            : 'Read articles and insights on construction supervision, project management, and innovation.'
        }
        localeCode={locale}
      />
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{dict.blog.title}</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/${params.locale}/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-700">{post.excerpt}</p>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}


