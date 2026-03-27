'use client';

import { motion } from 'framer-motion';
import { Course } from '@/types';
import Button from './Button';
import { getTelegramEnrollLink } from '@/lib/telegram';

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const enrollLink = getTelegramEnrollLink(course.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative glass rounded-2xl overflow-hidden card-hover ${
        course.popular ? 'ring-2 ring-primary-500' : ''
      }`}
    >
      {/* Popular Badge */}
      {course.popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}

      {/* Course Badge */}
      {course.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
            {course.badge}
          </span>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 md:p-8">
        {/* Course Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        {/* Course Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{course.title}</h3>

        {/* Course Description */}
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">{course.description}</p>

        {/* Benefits List */}
        <ul className="space-y-3 mb-6">
          {course.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-gray-300 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Price Section */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex items-baseline space-x-3 mb-4">
            <span className="text-3xl md:text-4xl font-bold text-white">${course.price}</span>
            {course.originalPrice && (
              <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
            )}
          </div>

          {/* Enroll Button */}
          <Button
            href={enrollLink}
            variant="telegram"
            size="lg"
            fullWidth
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
            }
          >
            Enroll via Telegram
          </Button>

          <p className="text-center text-gray-500 text-xs mt-3">
            🔒 Secure enrollment through Telegram
          </p>
        </div>
      </div>
    </motion.div>
  );
}
