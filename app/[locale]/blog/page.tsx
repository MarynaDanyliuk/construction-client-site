
import { posts } from "../../lib/posts";
import Link from "next/link";
import { getDictionary } from "@/app/dictionaries";
import { Locale } from "@/i18n-config";

type BlogPageProps = {
  params: { locale: Locale };
};

export default async function BlogPage({ params }: BlogPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
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
    </div>
  );
}



// // app/[locale]/blog/page.tsx
// import { posts } from "../../lib/posts";
// import Link from "next/link";
// import { getDictionary } from "@/app/dictionaries";
// import { Locale } from "@/i18n-config";

// type Props = { params: Promise<{ locale: 'uk' | 'en' }> };

// export default async function BlogPage({ params }: Props) {
//   const awaitedParams = await Promise.resolve(params);

//   const dict = await getDictionary(awaitedParams.locale);

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-12">
//       <h1 className="text-3xl font-bold mb-8">{dict.blog.title}</h1>
//       <div className="space-y-8">
//         {posts.map((post) => (
//           <div key={post.slug} className="border-b pb-4">
//             <h2 className="text-2xl font-semibold mb-2">
//               <Link href={`/${awaitedParams.locale}/blog/${post.slug}`}>{post.title}</Link>
//             </h2>
//             <p className="text-gray-700">{post.excerpt}</p>
//             <p className="text-sm text-gray-500 mt-1">{post.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }