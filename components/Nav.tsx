const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

export default function Nav() {
  return (
    <nav className="relative z-10 mx-auto max-w-7xl px-6 pt-8">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent-500 to-pink-500 text-white shadow-lg shadow-accent-500/30">
            ✦
          </span>
          <span className="text-lg">Brandname</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#cta"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}
