interface FooterProps {
  brand?: string;
  tagline?: string;
}

export default function Footer({
  brand = 'Brandname',
  tagline = 'A clean, fast, modern starting point.',
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mx-auto max-w-7xl px-6 pb-16 pt-12">
      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-accent-500 to-pink-500 text-sm text-white">
                ✦
              </span>
              {brand}
            </div>
            <p className="mt-3 text-sm text-slate-400">{tagline}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-300">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#cta" className="hover:text-white">Get started</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-300">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="mailto:hello@example.com" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-slate-500">
          © {year} {brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
