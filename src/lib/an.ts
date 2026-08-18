// ═══════════════════════════════════════════════════════════════
// AN (Moment) — Editorial Wedding Design System
// ═══════════════════════════════════════════════════════════════

export const AN = {
  bg: '#0D0D0D',
  bgAlt: '#141414',
  surface: '#1A1A1A',
  text: '#E8E4DE',
  textMuted: '#8A847C',
  accent: '#C4583A',
  accentLight: '#D4714F',
  gold: '#D4A853',
  taupe: '#7A6B5D',
  warm: '#A89580',
  border: '#2A2723',
} as const;

export const fonts = {
  display: '"Cormorant", serif',
  body: '"Outfit", sans-serif',
} as const;

export const couple = {
  name1: 'ELİF',
  name2: 'KEREM',
  date: '24 AĞUSTOS 2026',
  dateShort: '24.08.2026',
  day: 'CUMARTESİ',
  time: '19:00',
  venue: 'LALUNA GARDEN',
  location: 'Sarıyer · İstanbul',
};

export const story = [
  { year: '2019', text: 'İlk karşılaştığımız an, hayatımızın yönü değişti.' },
  { year: '2021', text: 'Birlikte dünyanın en güzel köşelerini keşfettik.' },
  { year: '2024', text: 'Bir ömür boyu birlikte olmaya söz verdik.' },
  { year: '2026', text: 'Yeni bir sayfa açıyoruz — ve sizi de davet ediyoruz.' },
];

export const events = [
  { time: '19:00', label: 'Nikâh Töreni' },
  { time: '20:00', label: 'Akşam Yemeği' },
  { time: '21:30', label: 'İlk Dans' },
  { time: '22:00', label: 'Eğlence ve Dans' },
];

export const galleryImages = [
  { id: 1, w: 'col-span-2 row-span-3' },
  { id: 2, w: 'col-span-1 row-span-2' },
  { id: 3, w: 'col-span-1 row-span-2' },
  { id: 4, w: 'col-span-2 row-span-2' },
  { id: 5, w: 'col-span-1 row-span-3' },
  { id: 6, w: 'col-span-1 row-span-2' },
];
