'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ANEntry from '@/components/an/ANEntry';
import ANHero from '@/components/an/ANHero';
import ANStory from '@/components/an/ANStory';
import ANDateVenue from '@/components/an/ANDateVenue';
import ANEvents from '@/components/an/ANEvents';
import ANGallery from '@/components/an/ANGallery';
import ANCountdown from '@/components/an/ANCountdown';
import ANRSVP from '@/components/an/ANRSVP';
import ANClosing from '@/components/an/ANClosing';
import { AN, fonts } from '@/lib/an';

// ═══════════════════════════════════════════════════════════════
// AN (Moment) — Single continuous scroll editorial page
// NO PANELS. NO SNAP. Just beautiful editorial scrolling.
// ═══════════════════════════════════════════════════════════════

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
      style={{
        scaleX: scrollYProgress,
        background: `linear-gradient(90deg, ${AN.accent}, ${AN.gold})`,
      }}
    />
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <motion.div
      className="flex items-center gap-4 mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-12 h-px" style={{ backgroundColor: AN.accent }} />
      <span
        className="text-[10px] tracking-[0.4em] uppercase"
        style={{ fontFamily: fonts.body, color: AN.accent }}
      >
        {text}
      </span>
    </motion.div>
  );
}

export default function Landing() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ backgroundColor: AN.bg, color: AN.text, fontFamily: fonts.body }}>
      {!opened && <ANEntry onOpen={() => setOpened(true)} />}

      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ScrollProgress />

          {/* ═══ HERO ═══ */}
          <ANHero />

          {/* ═══ QUOTE ═══ */}
          <section className="px-6 md:px-16 lg:px-24 py-32 md:py-48 max-w-5xl mx-auto">
            <motion.blockquote
              className="text-3xl md:text-5xl lg:text-6xl font-light leading-snug"
              style={{ fontFamily: fonts.display, color: AN.text }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              &ldquo;Bazı anlar vardır,<br />
              bir ömür boyunca<br />
              hatırlanır.&rdquo;
            </motion.blockquote>

            <motion.div
              className="w-16 h-px mt-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ backgroundColor: AN.accent, transformOrigin: 'left' }}
            />

            <motion.p
              className="mt-8 text-sm md:text-base leading-relaxed max-w-lg"
              style={{ fontFamily: fonts.body, color: AN.textMuted }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Hayatımızın en güzel başlangıçlarından birine adım atarken bu özel günü bizimle paylaşmanızı diliyoruz.
            </motion.p>
          </section>

          {/* ═══ STORY ═══ */}
          <ANStory />

          {/* ═══ DATE & VENUE ═══ */}
          <ANDateVenue />

          {/* ═══ EVENTS ═══ */}
          <ANEvents />

          {/* ═══ GALLERY ═══ */}
          <ANGallery />

          {/* ═══ COUNTDOWN ═══ */}
          <ANCountdown />

          {/* ═══ RSVP ═══ */}
          <ANRSVP />

          {/* ═══ CLOSING ═══ */}
          <ANClosing />

          {/* ═══ FOOTER ═══ */}
          <footer
            className="py-16 text-center border-t"
            style={{ borderColor: AN.border }}
          >
            <p className="text-lg tracking-wider" style={{ fontFamily: fonts.display }}>
              {couple_display}
            </p>
            <p className="mt-2 text-[10px] tracking-[0.3em] uppercase" style={{ color: AN.textMuted }}>
              {couple_date_display}
            </p>
            <p className="mt-4 text-[9px] tracking-[0.2em]" style={{ color: AN.textMuted, opacity: 0.5 }}>
              davetimigor.com
            </p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

const couple_display = 'Elif & Kerem';
const couple_date_display = '24 · 08 · 2026';
