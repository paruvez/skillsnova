import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SkillsNova | Master High-Income Skills That Actually Pay',
  description: 'Upgrade Your Skills. Upgrade Your Life. Learn English and AI technologies from expert instructors. Join 10,000+ students transforming their careers with SkillsNova.',
  keywords: ['online courses', 'English learning', 'AI training', 'career development', 'skill development', 'professional courses', 'AI video', 'ChatGPT'],
  authors: [{ name: 'SkillsNova' }],
  creator: 'SkillsNova',
  publisher: 'SkillsNova',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'SkillsNova | Master High-Income Skills That Actually Pay',
    description: 'Upgrade Your Skills. Upgrade Your Life. Learn English and AI technologies from expert instructors.',
    url: 'https://skillsnova.com',
    siteName: 'SkillsNova',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkillsNova | Master High-Income Skills That Actually Pay',
    description: 'Upgrade Your Skills. Upgrade Your Life. Learn English and AI technologies from expert instructors.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
