// app/about/page.js
export const metadata = {
  title: "About | Ovidiu.IT",
  description: "Why work with me: fast-loading, SEO-ready websites, conversion-focused design, and helpful automations.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <section className="card-luxe max-w-3xl mx-auto text-left">
        <h1 className="text-3xl font-bold mb-3">Hi, I’m Ovidiu 👋</h1>
        <p className="text-zinc-300">
          I help freelancers, startups, and businesses build <strong>websites that actually perform</strong>.
          My background blends <strong>technical SEO</strong>, <strong>Next.js development</strong>, and <strong>automation</strong>,
          so your site won’t just look good — it will work hard for you.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Why work with me?</h2>
        <ul className="list-disc ml-5 space-y-1 text-zinc-300">
          <li>🚀 Fast-loading, SEO-ready websites</li>
          <li>🧠 Conversion-focused design & copy</li>
          <li>⚙️ Automations that save time & money</li>
          <li>🌍 Remote-friendly, built for scale</li>
        </ul>

        <p className="mt-6">Ready to turn your online presence into a growth engine? <a href="/contact" className="mailto">Let’s talk.</a></p>
      </section>
    </main>
  );
}
