import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Brandname — Build something incredible',
  description: 'A modern static site, built with Next.js and Tailwind.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="relative min-h-screen overflow-x-hidden font-sans">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(124,58,237,0.15),transparent_60%)]" />
        {children}
      </body>
    </html>
  );
}
