export const metadata = {
  title: "Thank you — Ovidiu.IT",
  description: "We’ve received your request. We’ll get back to you shortly.",
  alternates: { canonical: "/thank-you" },
};

export default function ThankYou() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-xl mx-auto hero-card text-center">
        <div className="text-sm text-zinc-400 mb-1">Ovidiu.IT — Next.js + SEO</div>
        <h1 className="text-3xl md:text-4xl font-extrabold">Thanks — request received</h1>
        <p className="text-zinc-300 mt-2">
          I’ll review your message and reply shortly with next steps. Meanwhile, check the projects & live demos.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <a href="/projects" className="btn-ghost">View Projects</a>
          <a href="/" className="btn-primary">Back to Home</a>
        </div>
      </div>
    </main>
  );
}
