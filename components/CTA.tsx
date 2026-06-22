interface CTAProps {
  headline?: string;
  highlight?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CTA({
  headline = 'Ready to launch',
  highlight = 'your idea?',
  description = 'Take the first step. Replace the copy, add your content, and ship it today.',
  buttonLabel = 'Get started',
  buttonHref = '#',
}: CTAProps) {
  return (
    <section id="cta" className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-12 text-center sm:p-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.25),transparent_60%)]" />
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {headline} <span className="gradient-text">{highlight}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">{description}</p>
        <a href={buttonHref} className="btn-primary mt-10">
          {buttonLabel}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
