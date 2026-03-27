'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: '💬',
    title: 'Connect on Telegram',
    description: 'Click any enroll button to message us on Telegram. Our team will guide you through the course selection.',
  },
  {
    number: '02',
    icon: '📝',
    description: 'Fill out a quick enrollment form with your details and course preference.',
    title: 'Submit Your Details',
  },
  {
    number: '03',
    icon: '💳',
    title: 'Secure Payment',
    description: 'Complete your payment securely through Telegram. We accept multiple payment methods for your convenience.',
  },
  {
    number: '04',
    icon: '🎓',
    title: 'Start Learning',
    description: 'Get instant access to your course materials and start your learning journey immediately.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />

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
            🚀 How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Learning in{' '}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our streamlined enrollment process gets you from curiosity to learning in minutes, not days.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent z-0" />
              )}

              {/* Step Card */}
              <div className="relative z-10 text-center">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white text-2xl font-bold mb-6 shadow-lg shadow-primary-500/25">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6 animate-float">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
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
          <a
            href="https://t.me/SkillsNova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-telegram-gradient text-white font-semibold text-lg shadow-lg shadow-[#0088cc]/25 hover:shadow-[#0088cc]/40 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
