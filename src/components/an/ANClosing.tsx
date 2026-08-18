'use client';

import { motion } from 'framer-motion';
import { AN, fonts, couple } from '@/lib/an';

export default function ANClosing() {
  return (
    <section className="relative py-48 md:py-64 overflow-hidden">
      {/* Full-bleed dark background */}
      <div className="absolute inset-0" style={{ backgroundColor: AN.bg }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 lg:px-24 text-center">
        {/* Decorative line */}
        <motion.div
          className="w-px h-24 mx-auto mb-16"
          style={{ backgroundColor: AN.border }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-light leading-snug mb-12"
          style={{ fontFamily: fonts.display, color: AN.text }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Bu günü birlikte<br />
          unutulmaz kılalım.
        </motion.h2>

        <motion.div
          className="w-12 h-px mx-auto mb-12"
          style={{ backgroundColor: AN.accent }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        <motion.p
          className="text-xl md:text-2xl font-light tracking-wider"
          style={{ fontFamily: fonts.display, color: AN.accent }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Elif & Kerem
        </motion.p>

        <motion.p
          className="mt-4 text-xs tracking-[0.4em]"
          style={{ fontFamily: fonts.body, color: AN.textMuted }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          24 · 08 · 2026
        </motion.p>
      </div>
    </section>
  );
}
