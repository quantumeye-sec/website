// app/layout.jsx
import './globals.css';

export const metadata = {
  // Domain only; Next will prefix /website for relative assets
  metadataBase: new URL('https://quantumeye-sec.github.io/website/'),
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
    icon: [
      { url: "favicon.ico?v=4" },                          // multi-size .ico
      { url: "icon-192.png?v=4", sizes: "192x192", type: "image/png" },
      { url: "icon-512.png?v=4", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=4', sizes: '180x180' }],
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

