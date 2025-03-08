'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Alex Mitchell',
    role: 'Founder & CEO',
    bio: 'Former freelancer with 10+ years of experience in risk management',
    image: '/images/team/alex.jpg'
  },
  {
    name: 'Sarah Chen',
    role: 'Head of AI',
    bio: 'PhD in Machine Learning, specialized in pattern recognition',
    image: '/images/team/sarah.jpg'
  },
  // Добавьте остальных членов команды
];

const values = [
  {
    title: 'Transparency',
    description: 'We believe in complete openness with our community',
    icon: '🔍'
  },
  {
    title: 'Innovation',
    description: 'Constantly improving our AI to protect freelancers',
    icon: '💡'
  },
  // Добавьте остальные ценности
];

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering freelancers with AI-driven protection against toxic clients and payment risks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2023, ToxiGuard emerged from real freelancer struggles...
              {/* Продолжите историю */}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where every freelancer can work with confidence...
              {/* Продолжите видение */}
            </p>
          </motion.div>
        </div>

        {/* Добавьте секции с командой и ценностями */}
      </div>
    </section>
  );
} 