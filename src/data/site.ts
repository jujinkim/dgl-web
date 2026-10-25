export const site = {
  name: 'DaGaLi Web',
  appName: 'DaGaLi Client',
  abbreviation: 'DGL',
  expansion: 'dDal gGak Life',
  origin: 'https://ddal.ggak.life',
  repository: 'https://github.com/jujinkim/dgl-client',
  packageId: 'kim.jujin.dglc',
  contentReviewed: '2026-10-25',
} as const;

export type Language = 'en' | 'ko';
export const localePath = (language: Language) =>
  language === 'ko' ? '/ko/' : '/';

type Download = {
  id: 'apple' | 'google' | 'desktop';
  label: string;
  available: boolean;
  destination: string | null;
};

// Release requires explicit configuration, copy review and corresponding test updates.
// No numeric Apple App Store ID has been assigned; never synthesize one.
export const downloads: readonly Download[] = [
  {
    id: 'apple',
    label: 'Apple App Store',
    available: false,
    destination: null,
  },
  {
    id: 'google',
    label: 'Google Play',
    available: false,
    destination: `https://play.google.com/store/apps/details?id=${site.packageId}`,
  },
  {
    id: 'desktop',
    label: 'Desktop',
    available: false,
    destination: `${site.repository}/releases`,
  },
];
