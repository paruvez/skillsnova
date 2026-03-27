'use client';

import { motion } from 'framer-motion';
import Button from './Button';

const trustBadges = [
  { icon: '🎓', label: 'Expert Instructors' },
  { icon: '💼', label: 'Career-Focused' },
  { icon: '🔒', label: 'Secure Payment' },
  { icon: '⭐', label: '5-Star Reviews' },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-40" />

      {/* Decorative Sparkles */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-primary-400 rounded-full sparkle" />
      <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-accent-400 rounded-full sparkle" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary-300 rounded-full sparkle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-accent-300 rounded-full sparkle" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-10 w-1 h-1 bg-primary-400 rounded-full sparkle" style={{ animationDelay: '0.7s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 badge-pulse"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
          <span className="text-sm text-gray-300">🚀 Join 10,000+ students learning with SkillsNova</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Master{' '}
          <span className="gradient-text text-shadow-glow">High-Income Skills</span>{' '}
          That Actually Pay
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10"
        >
          Upgrade Your Skills. Upgrade Your Life. Learn from industry experts and transform your career with our premium courses in English and AI technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            href="https://t.me/SkillsNova"
            variant="telegram"
            size="lg"
            shine
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
            }
          >
            Join Telegram Channel
          </Button>
          <Button
            href="#courses"
            variant="outline"
            size="lg"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            }
          >
            View Courses
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-sm font-medium">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
