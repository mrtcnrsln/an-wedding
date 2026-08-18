'use client';

import { motion } from 'framer-motion';
import { AN, fonts, events } from '@/lib/an';

export default function ANEvents() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-32 md:py-48 max-w-5xl mx-auto">
      <motion.div
        className="flex items-center gap-4 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-12 h-px" style={{ backgroundColor: AN.accent }} />
        <span className="text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: fonts.body, color: AN.accent }}>
          Program
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {events.map((ev, i) => (
          <motion.div
            key={ev.time}
            className="flex items-start gap-6 group cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            {/* Time */}
            <div className="flex-shrink-0">
              <span className="text-3xl md:text-4xl font-light block"
                style={{ fontFamily: fonts.display, color: AN.text }}>
                {ev.time}
              </span>
            </div>

            {/* Divider */}
            <div className="flex-shrink-0 w-8 h-px mt-3 transition-colors duration-300"
              style={{ backgroundColor: AN.border }} />

            {/* Label */}
            <div>
              <p className="text-sm tracking-[0.15em] uppercase"
                style={{ fontFamily: fonts.body, color: AN.textMuted }}>
                {ev.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
