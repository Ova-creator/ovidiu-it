import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact — Ovidiu.IT",
  description:
    "Request a quote for Next.js websites, Technical SEO, and lightweight automations.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="hero-card mb-6 text-center">
          <div className="text-sm text-zinc-400 mb-1">Ovidiu.IT — Next.js + SEO</div>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Let’s build something great
          </h1>
          <p className="text-zinc-300 mt-2">
            Share a bit about your project and I’ll reply with next steps.
          </p>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
