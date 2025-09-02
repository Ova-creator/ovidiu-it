// app/blog/page.js
import { posts } from "../../lib/blogPosts";

export const metadata = {
  title: "Blog — UK Web Design & SEO Insights | Ovidiu.IT",
  description:
    "Guides and insights on UK web design pricing, technical SEO and Next.js best practices.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/blog",
    siteName: "Ovidiu.IT",
    title: "Blog — UK Web Design & SEO Insights | Ovidiu.IT",
    description:
      "Actionable guides on UK SEO and web design.",
    images: [{ url: "/og/og-image-1200x630.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og/og-image-1200x630.png"] },
};

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="hero-card card-luxe mb-10">
        <p className="text-sm text-zinc-300 mb-2">Insights — UK market</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Blog</h1>
        <p className="mt-3 text-zinc-300">
          UK-focused articles on web design pricing, technical SEO and Next.js.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <article key={p.slug} className="card-luxe">
            <h3 className="text-xl font-semibold mb-1">
              <a href={`/blog/${p.slug}`} className="hover:underline">{p.title}</a>
            </h3>
            <p className="text-zinc-400 text-sm mb-2">
              {new Date(p.date).toLocaleDateString("en-GB", {
                year: "numeric", month: "long", day: "numeric",
              })} · by {p.author}
            </p>
            <p className="text-zinc-300">{p.description}</p>
            <div className="mt-3">
              <a href={`/blog/${p.slug}`} className="btn-ghost">Read article</a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
