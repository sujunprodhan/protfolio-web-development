import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/componets/layouts/Navbar';
import Footer from '@/componets/layouts/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '600', '800'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Sujun Prodhan | MERN Stack Developer & Frontend Developer',
    template: '%s | Sujun Prodhan',
  },
  description:
    'Portfolio of Frontend Developments, a professional Web Developer and MERN Stack Developer specializing in Next.js, React, Tailwind CSS and modern web technologies.',
  keywords: [
    'Web Developer',
    'MERN Stack Developer',
    'Frontend Developer',
    'Next.js Developer',
    'React Developer',
    'JavaScript Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Sujun Prodhan' }],
  creator: 'Sujun Prodhan',
  metadataBase: new URL('https://yourwebsite.com'),

  openGraph: {
    title: 'Sujun Prodhan| Web & Frontend Developer',
    description:
      'Explore the portfolio of Your Name, a Web & Frontend Developer building fast, responsive and SEO-friendly websites.',
    url: 'https://yourwebsite.com',
    siteName: 'Sujun Prodhan',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sujun Prodhan - MERN Stack Developer & Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sujun Prodhan | MERN Stack Developer & Frontend Developer',
    description:
      'Web & Frontend Developer portfolio using Next.js, React and modern UI technologies.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-320px)]">{children}</main>
        <Footer />
        
      </body>
    </html>
  );
}
