'use client';

import { motion } from 'framer-motion';
import { AN, fonts, couple } from '@/lib/an';

// ═══ AN HERO — Full-screen cinematic names ═══

export default function ANHero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Asymmetric accent shapes */}
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-[0.03]"
        style={{ background: `linear-gradient(135deg, transparent, ${AN.accent})` }} />
      <div className="absolute bottom-0 left-0 w-[30%] h-[50%] opacity-[0.02]"
        style={{ background: `linear-gradient(45deg, ${AN.gold}, transparent)` }} />

      {/* Thin vertical line */}
      <motion.div
        className="absolute top-[15%] w-px h-[70%]"
        style={{ backgroundColor: AN.border }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative z-10 text-center">
        {/* Names - stacked, large */}
        <div className="flex flex-col items-center">
          <motion.span
            className="text-7xl md:text-[10rem] lg:text-[14rem] leading-[0.85] tracking-[-0.04em]"
            style={{ fontFamily: fonts.display, color: AN.text, fontWeight: 300 }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {couple.name1}
          </motion.span>

          <motion.span
            className="text-3xl md:text-5xl my-4 md:my-6"
            style={{ fontFamily: fonts.display, color: AN.accent, fontWeight: 300, fontStyle: 'italic' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            &
          </motion.span>

          <motion.span
            className="text-7xl md:text-[10rem] lg:text-[14rem] leading-[0.85] tracking-[-0.04em]"
            style={{ fontFamily: fonts.display, color: AN.text, fontWeight: 300 }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {couple.name2}
          </motion.span>
        </div>

        {/* Date */}
        <motion.p
          className="mt-12 text-xs tracking-[0.4em] uppercase"
          style={{ fontFamily: fonts.body, color: AN.textMuted }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {couple.date}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-px h-10"
          style={{ backgroundColor: AN.accent }}
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: AN.textMuted }}>
          Keşfet
        </span>
      </motion.div>
    </section>
  );
}
