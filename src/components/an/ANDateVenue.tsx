'use client';

import { motion } from 'framer-motion';
import { AN, fonts, couple } from '@/lib/an';

// ═══ AN DATE & VENUE — Combined editorial section ═══

export default function ANDateVenue() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0" style={{ backgroundColor: AN.surface }}>
        <div className="absolute inset-0 opacity-10"
          style={{ background: `radial-gradient(ellipse at 70% 50%, ${AN.accent}, transparent 60%)` }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Left - Date */}
          <div className="flex-1">
            <motion.div
              className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-light leading-none tracking-[-0.05em]"
              style={{ fontFamily: fonts.display, color: AN.text, opacity: 0.06 }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 0.06, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              24
            </motion.div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-3xl md:text-4xl font-light tracking-wider"
                style={{ fontFamily: fonts.display, color: AN.text }}>
                AĞUSTOS
              </p>
              <p className="text-lg tracking-[0.3em] mt-1"
                style={{ fontFamily: fonts.body, color: AN.textMuted }}>
                2026
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: AN.textMuted }}>
                {couple.day}
              </span>
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: AN.accent }} />
              <span className="text-xs tracking-[0.2em]" style={{ color: AN.accent }}>
                {couple.time}
              </span>
            </motion.div>
          </div>

          {/* Right - Venue */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="w-full aspect-[4/3] rounded-sm mb-6"
              style={{ background: `linear-gradient(135deg, ${AN.bgAlt}, ${AN.surface})` }} />

            <p className="text-[10px] tracking-[0.3em] uppercase mb-2"
              style={{ fontFamily: fonts.body, color: AN.textMuted }}>
              Mekân
            </p>
            <h3 className="text-2xl md:text-3xl font-light tracking-wider mb-2"
              style={{ fontFamily: fonts.display, color: AN.text }}>
              {couple.venue}
            </h3>
            <p className="text-sm" style={{ color: AN.textMuted }}>
              {couple.location}
            </p>

            <motion.a
              href="https://maps.google.com/?q=Laluna+Garden+Sarıyer+İstanbul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-3 border text-xs tracking-[0.2em] uppercase no-underline"
              style={{
                fontFamily: fonts.body,
                borderColor: AN.border,
                color: AN.text,
              }}
              whileHover={{ borderColor: AN.accent, color: AN.accent }}
            >
              Yol Tarifi Al
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
