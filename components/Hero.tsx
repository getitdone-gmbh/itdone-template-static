interface HeroProps {
  eyebrow?: string;
  headline?: string;
  highlight?: string;
  subline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function Hero({
  eyebrow = 'Now in beta — join the early access',
  headline = 'Build something',
  highlight = 'incredible',
  subline = 'A clean, fast, modern starting point. Replace this copy with whatever you’re launching — landing pages, portfolios, product sites, or anything in between.',
  primaryLabel = 'Get started',
  primaryHref = '#cta',
  secondaryLabel = 'Learn more',
  secondaryHref = '#features',
}: HeroProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 text-center sm:pt-32">
      <div
        className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300 backdrop-blur opacity-0 animate-fade-in"
        style={{ animationDelay: '0.1s' }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_12px_2px_rgba(167,139,250,0.7)]" />
        {eyebrow}
      </div>

      <h1
        className="mx-auto mt-8 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl opacity-0 animate-fade-up"
        style={{ animationDelay: '0.2s' }}
      >
        {headline}
        <span className="block gradient-text">{highlight}</span>
      </h1>

      <p
        className="mx-auto mt-8 max-w-2xl text-lg text-slate-400 sm:text-xl opacity-0 animate-fade-up"
        style={{ animationDelay: '0.35s' }}
      >
        {subline}
      </p>

      <div
        className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0 animate-fade-up"
        style={{ animationDelay: '0.5s' }}
      >
        <a href={primaryHref} className="btn-primary">
          {primaryLabel}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
        <a href={secondaryHref} className="btn-secondary">
          {secondaryLabel}
        </a>
      </div>
    </section>
  );
}
