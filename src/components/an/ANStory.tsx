'use client';

import { motion } from 'framer-motion';
import { AN, fonts, story } from '@/lib/an';

// ═══ AN STORY — Editorial narrative, asymmetric layout ═══

export default function ANStory() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-32 md:py-48">
      {/* Section header - left aligned */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-px" style={{ backgroundColor: AN.accent }} />
          <span className="text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: fonts.body, color: AN.accent }}>
            Hikâyemiz
          </span>
        </motion.div>

        {/* Story items - alternating asymmetric layout */}
        <div className="space-y-24 md:space-y-32">
          {story.map((s, i) => (
            <motion.div
              key={s.year}
              className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 ${
                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Year - large */}
              <div className="flex-shrink-0">
                <span
                  className="text-6xl md:text-8xl lg:text-9xl font-light leading-none"
                  style={{
                    fontFamily: fonts.display,
                    color: AN.text,
                    opacity: 0.08,
                  }}
                >
                  {s.year}
                </span>
              </div>

              {/* Content */}
              <div className={`max-w-md ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                <p className="text-sm tracking-[0.2em] mb-3" style={{ fontFamily: fonts.body, color: AN.accent }}>
                  {s.year}
                </p>
                <p
                  className="text-xl md:text-2xl font-light leading-relaxed"
                  style={{ fontFamily: fonts.display, color: AN.text }}
                >
                  {s.text}
                </p>
              </div>

              {/* Image placeholder */}
              <div
                className={`w-full md:w-80 h-48 md:h-64 rounded-sm flex-shrink-0 ${
                  i % 2 !== 0 ? 'md:order-first' : ''
                }`}
                style={{
                  background: `linear-gradient(${135 + i * 45}deg, ${AN.surface}, ${AN.bgAlt})`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
