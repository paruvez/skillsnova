'use client';

import { motion } from 'framer-motion';
import { Course } from '@/types';
import CourseCard from './CourseCard';

const courses: Course[] = [
  {
    id: 'english-basic',
    title: 'English Basic',
    price: 149,
    originalPrice: 299,
    description: 'Master the fundamentals of English communication for everyday life and basic professional settings.',
    benefits: [
      'Essential grammar & vocabulary',
      'Daily conversation skills',
      'Basic writing techniques',
      'Listening comprehension',
      '4 weeks of content',
      'Certificate of completion',
    ],
    badge: 'BEGINNER',
  },
  {
    id: 'english-advanced',
    title: 'English Advanced',
    price: 699,
    originalPrice: 999,
    description: 'Elevate your English to professional fluency for career advancement and global opportunities.',
    benefits: [
      'Advanced grammar mastery',
      'Business communication',
      'Presentation skills',
      'Professional writing',
      '8 weeks of content',
      '1-on-1 coaching sessions',
      'Industry-recognized certificate',
    ],
    badge: 'BEST VALUE',
  },
  {
    id: 'ai-video',
    title: 'AI Video',
    price: 999,
    originalPrice: 1499,
    description: 'Create stunning AI-powered videos that captivate audiences and drive engagement.',
    benefits: [
      'AI video generation tools',
      'Script writing with AI',
      'Voice cloning & synthesis',
      'Video editing automation',
      '6 weeks of hands-on projects',
      'Portfolio development',
      'Private community access',
    ],
    badge: 'TRENDING',
  },
  {
    id: 'complete-ai',
    title: 'Complete AI',
    price: 1399,
    originalPrice: 2499,
    description: 'Become an AI expert with comprehensive training in all major AI tools and applications.',
    benefits: [
      'All AI tools mastery',
      'ChatGPT & LLM expertise',
      'Image & video generation',
      'AI automation workflows',
      '12 weeks comprehensive program',
      'Weekly live Q&A sessions',
      'Lifetime course updates',
      'Career placement support',
      'Exclusive alumni network',
    ],
    badge: 'PREMIUM',
    popular: true,
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      
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
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-400 text-sm font-semibold mb-4 border border-primary-500/20">
            📚 Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Choose Your Path to{' '}
            <span className="gradient-text">Success</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From language mastery to cutting-edge AI skills, our courses are designed to transform your career and unlock new opportunities.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Not sure which course is right for you?
          </p>
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
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
