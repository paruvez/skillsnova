'use client';

import { motion } from 'framer-motion';
import { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Marketing Manager',
    content: 'The English Advanced course transformed my career. I went from struggling in meetings to confidently leading presentations. Worth every penny!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Content Creator',
    content: 'AI Video course is insane! I\'m now creating professional videos in hours instead of days. My client work has tripled since completing this.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Software Developer',
    content: 'Complete AI course gave me the edge I needed. I automated 80% of my repetitive tasks and got promoted within 3 months. SkillsNova delivers!',
    rating: 5,
  },
  {
    id: '4',
    name: 'James Wilson',
    role: 'Entrepreneur',
    content: 'Started with English Basic, now I\'m running my business confidently. The instructors genuinely care about your success. Highly recommend!',
    rating: 5,
  },
  {
    id: '5',
    name: 'Emily Thompson',
    role: 'Freelance Designer',
    content: 'The AI tools I learned here helped me expand my services. I now offer AI-generated assets to clients and my income doubled!',
    rating: 5,
  },
  {
    id: '6',
    name: 'David Park',
    role: 'Sales Executive',
    content: 'Best investment I\'ve made in myself. The Complete AI course paid for itself within the first month. SkillsNova is the real deal.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-500/10 text-accent-400 text-sm font-semibold mb-4 border border-accent-500/20">
            💬 Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Success Stories from{' '}
            <span className="gradient-text">Our Students</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our students have to say about their transformation.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 md:p-8 card-hover"
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Ready to write your own success story?</p>
          <a
            href="https://t.me/SkillsNova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-telegram-gradient text-white font-semibold text-lg shadow-lg shadow-[#0088cc]/25 hover:shadow-[#0088cc]/40 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
            Join SkillsNova Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
