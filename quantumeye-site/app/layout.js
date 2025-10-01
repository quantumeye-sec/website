// app/layout.jsx
import './globals.css';

export const metadata = {
  // Domain only; Next will prefix /website for relative assets
  metadataBase: new URL('https://quantumeye-sec.github.io'),
  title: 'QuantumEye Security',
  description: 'Pentesting & Red Team Consulting',
  openGraph: {
    title: 'QuantumEye Security',
    description: 'Pentesting & Red Team Consulting',
    // Use absolute URL for social previews on GH Pages
    images: ['https://quantumeye-sec.github.io/website/og-image.png'],
  },
  icons: {
    // RELATIVE paths (no leading slash) so basePath is applied
    icon: [{ url: 'favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: 'apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: 'site.webmanifest', // relative
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body>{children}</body>
    </html>
  );
}

