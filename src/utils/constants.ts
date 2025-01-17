import { type BannerFonts, type Artist } from './types';

import m8_1Img from '../assets/images/covers/m8_1.png';
import m8_2Img from '../assets/images/covers/m8_2.png';
import zhaakImg from '../assets/images/covers/zhaak_1.png';

const ARTISTS: Artist[] = [
  {
    label: 'Gentle Mates',
    group: 'm8',
    externalLink: 'https://www.gentlemates.com',
    banners: [
      { cover: m8_1Img, index: 1 },
      { cover: m8_2Img, index: 2 },
    ],
    inputs: [
      { id: 'username', type: 'text' },
      { id: 'role', type: 'text' },
      {
        id: 'supporter-level',
        type: 'select',
        options: [
          { value: 'ultra', label: 'Ultra' },
          { value: 'supporter', label: 'Supporter' },
          { value: 'fan', label: 'Fan' },
        ],
      },
    ],
  },
  {
    label: 'Zhaak',
    group: 'zhaak',
    externalLink: 'https://zhaak.fr',
    inputs: [{ id: 'username', type: 'text', maxChars: '5-8' }],
    banners: [{ cover: zhaakImg, index: 1 }],
  },
];

const BANNER_FONTS: BannerFonts = {
  m8: [
    null,
    {
      username: {
        family: 'TuskerGrotesk',
        url: '../assets/fonts/TuskerGrotesk-4800Super.woff2',
        sizeMultiplier: 0.045,
        maxWidth: 0.206,
        xMultiplier: 0.778,
        yMultiplier: 0.34,
      },
      role: {
        family: 'Helvetica',
        sizeMultiplier: 0.016,
        maxWidth: 0.188,
        xMultiplier: 0.795,
        yMultiplier: 0.48,
      },
    },
    {
      username: {
        family: 'TuskerGrotesk',
        url: '../assets/fonts/TuskerGrotesk-4800Super.woff2',
        sizeMultiplier: 0.045,
        maxWidth: 0.206,
        xMultiplier: 0.778,
        yMultiplier: 0.34,
      },
      role: {
        family: 'Helvetica',
        sizeMultiplier: 0.016,
        maxWidth: 0.188,
        xMultiplier: 0.795,
        yMultiplier: 0.48,
      },
    },
  ],
  zhaak: [
    null,
    {
      username: {
        family: 'DharmaGothic',
        url: '../assets/fonts/DharmaGothic.woff2',
        sizeMultiplier: 0.08,
        fixedSize: true,
        maxWidth: 0.25,
        xMultiplier: 0.61,
        yMultiplier: 0.48,
      },
    },
  ],
};

export { ARTISTS, BANNER_FONTS };
