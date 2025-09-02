export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container-page py-10 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Ovidiu.IT — All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="/services" className="link">Services</a>
          <a href="/projects" className="link">Projects</a>
          <a href="/about" className="link">About</a>
          <a href="/contact" className="link">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
