'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AN, fonts } from '@/lib/an';

function useCountdown(target: string) {
  const [diff, setDiff] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  useEffect(() => {
    const calc = () => {
      const now = Date.now();
      const end = new Date(target).getTime();
      const d = Math.max(0, end - now);
      setDiff({
        days: Math.floor(d / 86400000),
        hours: Math.floor((d % 86400000) / 3600000),
        mins: Math.floor((d % 3600000) / 60000),
        secs: Math.floor((d % 60000) / 1000),
      });
    };
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [target]);
  return diff;
}

export default function ANCountdown() {
  const { days, hours, mins, secs } = useCountdown('2026-08-24T19:00:00+03:00');
  const units = [
    { value: days, label: 'GÜN' },
    { value: hours, label: 'SAAT' },
    { value: mins, label: 'DAKİKA' },
    { value: secs, label: 'SANİYE' },
  ];

  return (
    <section className="py-32 md:py-48" style={{ backgroundColor: AN.surface }}>
      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 text-center">
        <motion.div
          className="flex items-center gap-4 mb-16 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-px" style={{ backgroundColor: AN.accent }} />
          <span className="text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: fonts.body, color: AN.accent }}>
            Buluşmamıza Kalan
          </span>
          <div className="w-12 h-px" style={{ backgroundColor: AN.accent }} />
        </motion.div>

        <div className="flex justify-center gap-10 md:gap-16">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
            >
              <span
                className="text-4xl md:text-6xl lg:text-7xl font-light leading-none"
                style={{ fontFamily: fonts.display, color: AN.text }}
              >
                {String(u.value).padStart(2, '0')}
              </span>
              <div className="w-6 h-px mt-4 mb-2" style={{ backgroundColor: AN.border }} />
              <span className="text-[9px] tracking-[0.25em] uppercase"
                style={{ fontFamily: fonts.body, color: AN.textMuted }}>
                {u.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
