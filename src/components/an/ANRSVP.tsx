'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AN, fonts } from '@/lib/an';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function ANRSVP() {
  const [step, setStep] = useState<'choice' | 'form'>('choice');
  const [attending, setAttending] = useState<boolean | null>(null);
  const [name, setName] = useState('');
  const [count, setCount] = useState('1');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const createRsvp = useMutation(api.rsvps.submit);

  const handleSubmit = async () => {
    if (!name.trim()) return;
    await createRsvp({
      name: name.trim(),
      attending: attending!,
      guestCount: parseInt(count) || 1,
      note: note.trim() || undefined,
    });
    setSubmitted(true);
  };

  const inputStyle = {
    fontFamily: fonts.body,
    backgroundColor: 'transparent',
    borderBottom: `1px solid ${AN.border}`,
    color: AN.text,
    outline: 'none',
    padding: '12px 0',
    fontSize: '14px',
    letterSpacing: '0.03em',
    width: '100%' as const,
    transition: 'border-color 0.3s',
  };

  return (
    <section className="px-6 md:px-16 lg:px-24 py-32 md:py-48 max-w-3xl mx-auto">
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-12 h-px" style={{ backgroundColor: AN.accent }} />
        <span className="text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: fonts.body, color: AN.accent }}>
          LCV
        </span>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-light mb-4"
        style={{ fontFamily: fonts.display, color: AN.text }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Sizi de Bekliyoruz
      </motion.h2>

      <motion.p
        className="text-sm mb-12 leading-relaxed"
        style={{ color: AN.textMuted }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Bu özel günümüzde bizimle olup olmayacağınızı paylaşmanız bizi çok mutlu eder.
      </motion.p>

      {submitted ? (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-2xl font-light mb-3" style={{ fontFamily: fonts.display, color: AN.text }}>
            Teşekkürler
          </p>
          <p className="text-sm" style={{ color: AN.textMuted }}>
            {attending ? 'Sizi de aramızda görmek bizi çok mutlu edecek.' : 'Anlıyoruz, yine de en güzel dileklerimiz sizinle.'}
          </p>
        </motion.div>
      ) : step === 'choice' ? (
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: 'Katılacağım', value: true },
            { label: 'Katılamayacağım', value: false },
          ].map((opt) => (
            <motion.button
              key={opt.label}
              className="px-8 py-4 border text-xs tracking-[0.15em] uppercase cursor-pointer"
              style={{
                fontFamily: fonts.body,
                borderColor: AN.border,
                color: AN.text,
                backgroundColor: 'transparent',
              }}
              whileHover={{ borderColor: AN.accent, color: AN.accent }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { setAttending(opt.value); setStep('form'); }}
            >
              {opt.label}
            </motion.button>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <input type="text" placeholder="Ad Soyad" value={name} onChange={e => setName(e.target.value)} style={inputStyle}
            onFocus={e => { e.currentTarget.style.borderBottomColor = AN.accent; }}
            onBlur={e => { e.currentTarget.style.borderBottomColor = AN.border; }} />
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-[10px] tracking-[0.2em] uppercase mb-2 block"
                style={{ color: AN.textMuted, fontFamily: fonts.body }}>Kişi Sayısı</label>
              <select value={count} onChange={e => setCount(e.target.value)}
                style={{ ...inputStyle, cursor: 'pointer' }}>
                {[1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n} style={{ background: AN.bg, color: AN.text }}>{n}</option>
                ))}
              </select>
            </div>
          </div>
          <textarea placeholder="Not (isteğe bağlı)" value={note} onChange={e => setNote(e.target.value)}
            rows={3} style={{ ...inputStyle, resize: 'none' as const }}
            onFocus={e => { e.currentTarget.style.borderBottomColor = AN.accent; }}
            onBlur={e => { e.currentTarget.style.borderBottomColor = AN.border; }} />
          <motion.button
            className="mt-4 px-10 py-4 border text-xs tracking-[0.2em] uppercase self-start cursor-pointer"
            style={{ fontFamily: fonts.body, borderColor: AN.border, color: AN.text, backgroundColor: 'transparent' }}
            whileHover={{ borderColor: AN.accent, color: AN.accent }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSubmit}
          >
            Gönder
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}
