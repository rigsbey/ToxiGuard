import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion';
import { useScrollToSection } from '@/hooks/useScrollToWaitlist';

const testimonials = [
  {
    name: "Alex K.",
    role: "Freelance Designer",
    experience: "5+ years on Upwork",
    text: "ToxiGuard cut my client conflicts by 90%!",
    badge: "🎯 Beta Tester"
  },
  {
    name: "Maria S.",
    role: "SaaS Developer",
    experience: "Moscow, Russia",
    text: "Saved $12k in potential losses last quarter",
    badge: "🚀 Early Adopter"
  }
];

export default function Testimonial() {
  const scrollToStats = useScrollToSection('stats');

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative"
          >
            <button 
              onClick={scrollToStats}
              className="absolute top-4 right-4 text-gray-400 hover:text-toxic-red"
            >
              <InformationCircleIcon className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-toxic-red/10 text-toxic-red">
                <span className="text-2xl">👨💻</span>
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <div className="text-sm text-gray-600">
                  <p>{testimonial.role}</p>
                  <p className="text-xs mt-1">{testimonial.experience}</p>
                </div>
              </div>
              <span className="ml-auto text-sm bg-gray-100 px-3 py-1 rounded-full">
                {testimonial.badge}
              </span>
            </div>
            <p className="text-gray-800 pl-2 border-l-4 border-toxic-red">
              “{testimonial.text}”
            </p>
          </motion.div>
        ))}
      </div>
      
      <p className="text-center text-sm text-gray-500 mt-6">
        Results based on beta testing with 127 early users. Individual results may vary.
      </p>
    </div>
  )
} 