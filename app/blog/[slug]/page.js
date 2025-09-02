// app/blog/[slug]/page.js
import Script from "next/script";
import { notFound } from "next/navigation";
import { posts } from "../../../lib/blogPosts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Ovidiu.IT`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      locale: "en_GB",
      url: `/blog/${post.slug}`,
      siteName: "Ovidiu.IT",
      title: `${post.title} | Ovidiu.IT`,
      description: post.description,
      images: [{ url: post.ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [post.ogImage] },
  };
}

export default function BlogPostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const ldArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Ovidiu.IT" },
    image: post.ogImage,
    mainEntityOfPage: `https://ovidiu.it.com/blog/${post.slug}`,
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <Script id="ld-article" type="application/ld+json">
        {JSON.stringify(ldArticle)}
      </Script>

      <article className="prose prose-invert max-w-none">
        <header className="hero-card card-luxe mb-8">
          <p className="text-sm text-zinc-300 mb-2">
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric", month: "long", day: "numeric",
            })}
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {post.title}
          </h1>
          <p className="mt-3 text-zinc-300">{post.description}</p>
        </header>

        <section
          className="card-luxe p-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <div className="mt-8">
        <a href="/blog" className="btn-ghost">← Back to Blog</a>
      </div>
    </main>
  );
}
