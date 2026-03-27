'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ } from '@/types';

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I enroll in a course?',
    answer: 'Simply click on the "Enroll via Telegram" button on any course card. You\'ll be redirected to our Telegram channel where you can fill out the enrollment form and complete your payment securely.',
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including credit/debit cards, PayPal, and cryptocurrency. All payments are processed securely through Telegram\'s payment system.',
  },
  {
    id: '3',
    question: 'How long do I have access to the course materials?',
    answer: 'You get lifetime access to all course materials! This includes any future updates we make to the course content. Learn at your own pace, revisit lessons anytime.',
  },
  {
    id: '4',
    question: 'Are the courses suitable for beginners?',
    answer: 'Yes! We offer courses for all skill levels. Our English Basic and introductory AI courses are perfect for beginners. Each course clearly indicates its difficulty level.',
  },
  {
    id: '5',
    question: 'Do I receive a certificate after completion?',
    answer: 'Absolutely! All our courses include a certificate of completion that you can add to your LinkedIn profile and resume. Some advanced courses offer industry-recognized certifications.',
  },
  {
    id: '6',
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied with your course for any reason, just contact us within 30 days and we\'ll process a full refund.',
  },
  {
    id: '7',
    question: 'Is there any support available during the course?',
    answer: 'Yes! You\'ll have access to our private community, weekly Q&A sessions (for premium courses), and direct support from instructors via Telegram.',
  },
  {
    id: '8',
    question: 'Can I access courses on mobile devices?',
    answer: 'Yes! All our courses are fully responsive and can be accessed on any device - desktop, tablet, or mobile. Learn anytime, anywhere.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-400 text-sm font-semibold mb-4 border border-primary-500/20">
            ❓ FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-400">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, reach out on Telegram.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                aria-expanded={openId === faq.id}
              >
                <span className="text-white font-semibold pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="https://t.me/SkillsNova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
            Chat with us on Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
