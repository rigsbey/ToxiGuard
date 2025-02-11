'use client';

import { METRICS } from '@/config/metrics';
import { motion } from 'framer-motion';

type Testimonial = {
  nickname: string;
  role: string;
  text: string;
  avatar: string;
  metrics: string[];
}

const testimonials: Testimonial[] = [
  {
    nickname: "molhotartaro",
    role: "Concept Artist • 3y exp",
    text: "Filtered 4 risky NFT projects last month. 95% accuracy!",
    avatar: "https://styles.redditmedia.com/t5_dlpj1/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfNmFjYjhmYjgyODgwZDM5YzJiODQ0NmY4Nzc4YTE0ZDM0ZWU2Y2ZiN18xNjg2_rare_1b126277-373f-438b-a125-0007a97ac332-headshot.png",
    metrics: ["8h saved", "2 contracts"]
  },
  {
    nickname: "GigMistress",
    role: "VA • Top Rated",
    text: "Uncovered 3 shady clients in my first week using TG",
    avatar: "https://styles.redditmedia.com/t5_3b6he7/styles/profileIcon_vk7rawqifodd1.png",
    metrics: ["$2k protected", "3 flags"]
  },
  {
    nickname: "SilentButDeadlySquid",
    role: "Marine Biologist",
    text: "My productivity jumped 60% after filtering clients",
    avatar: "https://styles.redditmedia.com/t5_28lulm/styles/profileIcon_snoo70f2b8f1-ef24-4df9-b717-0e36f18892a8-headshot.png",
    metrics: ["5 projects", "4.2x ROI"]
  },
  {
    nickname: "Legal-Rest-6280",
    role: "Law Consultant",
    text: "Best decision for contract analysis I've made",
    avatar: "https://styles.redditmedia.com/t5_o35n1/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfNDY2YTMzMDg4N2JkZjYyZDUzZjk2OGVhODI0NzkzMTUwZjA3NzYyZV85NzkyNA_rare_22726f77-ac1c-4c49-a432-dfa1c4ff1ceb-headshot.png",
    metrics: ["12 deals", "100% clean"]
  },
  {
    nickname: "no_u_bogan",
    role: "Mining Engineer",
    text: "Dodged a $15k liability last quarter",
    avatar: "https://styles.redditmedia.com/t5_mesxf/styles/profileIcon_bddm62390mld1.jpeg",
    metrics: ["$15k saved", "1 risk"]
  },
  {
    nickname: "sporadicwaves",
    role: "Oceanographer",
    text: "TG's risk scoring is freakishly accurate",
    avatar: "https://i.redd.it/snoovatar/avatars/a0d40f50-b4b9-44e1-8aa0-bda294d5a67d.png",
    metrics: ["3 projects", "5⭐"]
  },
  {
    nickname: "•lilithskies",
    role: "Astrophotographer",
    text: "Replaced 80% of my manual checks with TG",
    avatar: "https://styles.redditmedia.com/t5_8b5cvj/styles/communityIcon_izy2luu72nee1.png",
    metrics: ["20h saved", "8 scans"]
  },
  {
    nickname: "Dyebbyangj",
    role: "Textile Artist",
    text: "Caught 3 contract loopholes instantly",
    avatar: "/images/james-cooper.png",
    metrics: ["5 contracts", "100% detection"]
  }
];

const SocialIcon = ({ type }: { type: string }) => {
  const icons = {
    github: (
      <svg className="w-5 h-5" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>
      </svg>
    ),
    discord: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
        <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  };

  return icons[type as keyof typeof icons] || null;
};

const TestimonialCard = ({ 
  testimonial,
  variant = 'normal' 
}: { 
  testimonial: Testimonial
  variant?: 'normal' | 'reverse' 
}) => (
  <div 
    className={`w-[260px] md:w-[280px] flex-shrink-0 bg-white p-3 md:p-4 rounded-xl border border-gray-200 
             hover:shadow-lg transition-all text-xs md:text-sm ${
               variant === 'reverse' ? 'bg-blue-50 border-blue-200' : ''
             }`}
  >
    <div className="flex items-center gap-3 mb-3">
      <img 
        src={testimonial.avatar}
        alt={testimonial.nickname}
        className="w-10 h-10 rounded-full object-cover border border-blue-100"
      />
      <div>
        <h3 className="font-semibold text-gray-900">{testimonial.nickname}</h3>
        <p className="text-xs text-gray-600">{testimonial.role}</p>
      </div>
    </div>
    <div className="text-gray-600 mb-3 text-[15px] leading-relaxed">
      {testimonial.text}
    </div>
    <div className="flex flex-wrap gap-1.5">
      {testimonial.metrics.map((metric, i) => (
        <span 
          key={i}
          className="px-2 py-0.5 bg-blue-50 text-blue-800 text-xs rounded-full 
                   border border-blue-200"
        >
          {metric}
        </span>
      ))}
    </div>
  </div>
);

export default function TestimonialsSection() {
  // Разделяем массив на 2 уникальные группы
  const topTestimonials = testimonials.slice(0, 4);
  const bottomTestimonials = testimonials.slice(4);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by 1,200+ professionals worldwide
          </p>
        </div>

        <div className="relative h-[400px] md:h-[520px] overflow-x-hidden group">
          <motion.div 
            className="absolute top-0 left-0 flex gap-4 md:gap-6 w-[200%]"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ 
              duration: 40,
              repeat: Infinity, 
              ease: 'linear'
            }}
          >
            {[...topTestimonials, ...topTestimonials].map((testimonial, index) => (
              <TestimonialCard 
                key={`top-${index}-${testimonial.nickname}`} 
                testimonial={testimonial} 
              />
            ))}
          </motion.div>

          <motion.div 
            className="absolute top-[180px] md:top-[240px] left-0 flex gap-4 md:gap-6 w-[200%]"
            animate={{ x: ['-100%', '0%'] }}
            transition={{ 
              duration: 40,
              repeat: Infinity, 
              ease: 'linear'
            }}
          >
            {[...bottomTestimonials, ...bottomTestimonials].map((testimonial, index) => (
              <TestimonialCard 
                key={`bottom-${index}-${testimonial.nickname}`}
                testimonial={testimonial} 
                variant="reverse" 
              />
            ))}
          </motion.div>
        </div>

        <div className="md:hidden flex justify-center gap-2 mt-6">
          {[1,2,3].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 rounded-full bg-gray-300 transition-all"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
} 