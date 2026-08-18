'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AN, fonts } from '@/lib/an';

export default function ANEntry({ onOpen }: { onOpen: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 4200),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer"
      style={{ backgroundColor: AN.bg }}
      onClick={phase >= 4 ? onOpen : undefined}
    >
      {/* Horizontal line draws across */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-px"
        style={{ backgroundColor: AN.accent }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: phase >= 1 ? 1 : 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* "AN" */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.h1
              className="text-8xl md:text-[12rem] leading-none tracking-[-0.03em]"
              style={{ fontFamily: fonts.display, color: AN.text, fontWeight: 300 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              AN
            </motion.h1>
          )}
        </AnimatePresence>

        {/* Subtitle */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.p
              className="mt-6 text-xs tracking-[0.5em] uppercase"
              style={{ fontFamily: fonts.body, color: AN.textMuted }}
              initial={{ opacity: 0, letterSpacing: '1em' }}
              animate={{ opacity: 1, letterSpacing: '0.5em' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              BİR DAKİKALIK HİKÂYE
            </motion.p>
          )}
        </AnimatePresence>

        {/* CTA */}
        <AnimatePresence>
          {phase >= 4 && (
            <motion.button
              className="mt-12 px-10 py-4 text-xs tracking-[0.3em] uppercase border cursor-pointer"
              style={{
                fontFamily: fonts.body,
                borderColor: AN.border,
                color: AN.text,
                backgroundColor: 'transparent',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{
                borderColor: AN.accent,
                color: AN.accent,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => { e.stopPropagation(); onOpen(); }}
            >
              OKUMAYA BAŞLA
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom credit */}
      <motion.div
        className="absolute bottom-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 3 ? 0.3 : 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-[10px] tracking-[0.2em]" style={{ fontFamily: fonts.body, color: AN.textMuted }}>
          davetimigor.com
        </p>
      </motion.div>
    </motion.div>
  );
}
