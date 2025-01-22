import { type BannerFonts, type Artist } from './types';

// import covers
import m8_1Img from '../assets/images/covers/m8_1.png';
import m8_2Img from '../assets/images/covers/m8_2.png';
import zhaak1Img from '../assets/images/covers/zhaak_1.png';
import zhaak2Img from '../assets/images/covers/zhaak_2.png';
import juiceezImg from '../assets/images/covers/juiceez_1.png';

// import fonts
import tuskerGrotesk from '../assets/fonts/TuskerGrotesk-4800Super.woff2';
import dharmaGothic from '../assets/fonts/DharmaGothic.woff2';

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
      { id: 'username', type: 'text', maxChars: 15 },
      { id: 'role', type: 'text', maxChars: 30 },
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
    inputs: [{ id: 'username', type: 'text' }],
    banners: [
      { cover: zhaak1Img, index: 1 },
      { cover: zhaak2Img, index: 2 },
    ],
  },
  {
    label: 'Juiceez',
    group: 'juiceez',
    externalLink: 'https://discordapp.com/users/531862152047230986',
    inputs: [{ id: 'username', type: 'text', maxChars: 15 }],
    banners: [{ cover: juiceezImg, index: 1 }],
  },
];

const BANNER_FONTS: BannerFonts = {
  m8: [
    null,
    {
      username: {
        family: 'TuskerGrotesk',
        url: tuskerGrotesk,
        color: '#1e1d1e',
        sizeMultiplier: 0.045,
        maxWidth: 0.206,
        xMultiplier: 0.778,
        yMultiplier: 0.34,
        textAlign: 'right',
      },
      role: {
        family: 'Helvetica',
        color: '#1e1d1e',
        sizeMultiplier: 0.016,
        maxWidth: 0.188,
        xMultiplier: 0.795,
        yMultiplier: 0.48,
        textAlign: 'right',
      },
    },
    {
      username: {
        family: 'TuskerGrotesk',
        url: tuskerGrotesk,
        color: '#1e1d1e',
        sizeMultiplier: 0.045,
        maxWidth: 0.206,
        xMultiplier: 0.778,
        yMultiplier: 0.34,
        textAlign: 'right',
      },
      role: {
        family: 'Helvetica',
        color: '#1e1d1e',
        sizeMultiplier: 0.016,
        maxWidth: 0.188,
        xMultiplier: 0.795,
        yMultiplier: 0.48,
        textAlign: 'right',
      },
    },
  ],
  zhaak: [
    null,
    {
      username: {
        family: 'DharmaGothic',
        url: dharmaGothic,
        color: '#000000',
        sizeMultiplier: 0.08,
        fixedSize: true,
        maxWidth: 0.27,
        xMultiplier: 0.587,
        yMultiplier: 0.48,
        textAlign: 'right',
      },
    },
    {
      username: {
        family: 'DharmaGothic',
        url: dharmaGothic,
        color: '#B1FC10',
        sizeMultiplier: 0.08,
        fixedSize: true,
        maxWidth: 0.29,
        xMultiplier: 0.57,
        yMultiplier: 0.46,
        textAlign: 'right',
      },
    },
  ],
  juiceez: [
    null,
    {
      username: {
        family: 'TuskerGrotesk',
        url: tuskerGrotesk,
        color: '#FFFFFF',
        sizeMultiplier: 0.05,
        maxWidth: 0.17,
        xMultiplier: 0.02,
        yMultiplier: 0.35,
      },
    },
  ],
};

export { ARTISTS, BANNER_FONTS };
