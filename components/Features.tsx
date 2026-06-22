interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: '⚡',
    title: 'Lightning fast',
    description: 'Next.js prerenders static pages at build time. Pages load in milliseconds, even on slow connections.',
  },
  {
    icon: '🎨',
    title: 'Beautiful by default',
    description: 'A polished, modern design system built on Tailwind. Tweak the palette in one file.',
  },
  {
    icon: '🔒',
    title: 'Privacy-friendly',
    description: 'No trackers, no third-party scripts. Just your content, served fast.',
  },
  {
    icon: '📱',
    title: 'Responsive everywhere',
    description: 'Looks great on phones, tablets, laptops, and ultrawides without extra work.',
  },
  {
    icon: '🧩',
    title: 'Composable',
    description: 'Drop in components, mix and match, build what you need with minimal boilerplate.',
  },
  {
    icon: '🚀',
    title: 'Deploy in one click',
    description: 'Pushes straight to ITDone Cloud. No DevOps, no infra babysitting.',
  },
];

export default function Features({ features = defaultFeatures }: FeaturesProps) {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Everything you need, <span className="gradient-text">nothing you don’t</span>
        </h2>
        <p className="mt-6 text-lg text-slate-400">
          A solid foundation so you can focus on what matters — the content and the message.
        </p>
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="card group">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-500/20 to-pink-500/20 text-2xl">
              {f.icon}
            </div>
            <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
