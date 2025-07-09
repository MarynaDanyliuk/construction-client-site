
import { posts } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/dictionaries";
import { Locale } from "@/i18n-config";

type BlogPostPageProps = {
  params: {
    locale: Locale;
    slug: string;
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = params;
  const dict = getDictionary(locale);

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      <article
        className="prose prose-lg dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="mt-8">
        <a
          href={`/${locale}/blog`}
          className="text-blue-600 hover:underline"
        >
          ← {dict.blog.back}
        </a>
      </div>
    </div>
  );
}
