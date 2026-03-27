import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SkillsNova - Master High-Income Skills',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkillsNova | Master High-Income Skills That Actually Pay',
    description: 'Upgrade Your Skills. Upgrade Your Life. Learn English and AI technologies from expert instructors.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://skillsnova.com'),
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
