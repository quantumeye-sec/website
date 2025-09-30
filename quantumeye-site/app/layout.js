export const metadata = {
  metadataBase: new URL('https://quantumeye-sec.github.io/website'),
  title: 'QuantumEye Security — Penetration Testing & Red Team Consulting',
  description:
    'Boutique penetration testing & red-team consulting for startups, scaleups, and regulated enterprises. We blend attacker tradecraft with measurable risk reduction.',
  openGraph: {
    title: 'QuantumEye Security — Pentesting & Red Team',
    description:
      'Boutique penetration testing & red-team consulting for startups, scaleups, and regulated enterprises.',
    url: 'https://quantumeye-sec.github.io/website',
    siteName: 'QuantumEye Security',
    type: 'website',
    images: ['https://quantumeye-sec.github.io/website/og-image.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  robots: { index: true, follow: true }
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-200 bg-gradient-to-b from-black via-[#0b0b12] to-black">
        {children}
      </body>
    </html>
  );
}

