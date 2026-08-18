'use client';

import { motion } from 'framer-motion';
import { AN, fonts } from '@/lib/an';

const images = [
  { id: 1, span: 'col-span-2 row-span-3', aspect: 'aspect-[3/4]' },
  { id: 2, span: 'col-span-1 row-span-2', aspect: 'aspect-square' },
  { id: 3, span: 'col-span-1 row-span-2', aspect: 'aspect-[4/5]' },
  { id: 4, span: 'col-span-2 row-span-2', aspect: 'aspect-[16/9]' },
  { id: 5, span: 'col-span-1 row-span-3', aspect: 'aspect-[2/3]' },
  { id: 6, span: 'col-span-1 row-span-2', aspect: 'aspect-square' },
];

export default function ANGallery() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-32 md:py-48 max-w-7xl mx-auto">
      <motion.div
        className="flex items-center gap-4 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-12 h-px" style={{ backgroundColor: AN.accent }} />
        <span className="text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: fonts.body, color: AN.accent }}>
          Anılar
        </span>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[160px]">
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            className={`${img.span} relative overflow-hidden rounded-sm group cursor-pointer`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Placeholder */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                background: `linear-gradient(${120 + i * 30}deg, ${AN.bgAlt}, ${AN.surface}, ${AN.bgAlt})`,
              }} />

            {/* Hover overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(180deg, transparent 50%, ${AN.bg}CC)` }} />

            {/* Number */}
            <div className="absolute top-3 right-3 text-[10px] tracking-wider opacity-30"
              style={{ fontFamily: fonts.body, color: AN.text }}>
              {String(img.id).padStart(2, '0')}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
