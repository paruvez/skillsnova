'use client';

import { motion } from 'framer-motion';

export default function GuaranteeSection() {
  return (
    <section id="guarantee" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 text-center overflow-hidden relative"
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            {/* Badge Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-8 shadow-lg shadow-green-500/25"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              30-Day Money-Back{' '}
              <span className="gradient-text">Guarantee</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re so confident in the quality of our courses that we offer a full refund if you&apos;re not satisfied within the first 30 days. No questions asked.
            </p>

            {/* Guarantee Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: '📅', text: '30 Days to Decide' },
                { icon: '💰', text: 'Full Refund' },
                { icon: '✅', text: 'No Questions Asked' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center justify-center space-x-2 text-gray-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Text */}
            <p className="text-gray-400 text-sm">
              Your satisfaction is our priority. Join thousands of happy students risk-free.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
