import { type BannerFonts, type Artist } from './types';

// import covers
import m8_1Img from '../assets/images/covers/m8_1.png';
import m8_2Img from '../assets/images/covers/m8_2.png';
import m8_3Img from '../assets/images/covers/m8_3.png';
import m8_4Img from '../assets/images/covers/m8_4.png';

import zhaak1Img from '../assets/images/covers/zhaak_1.png';
import zhaak2Img from '../assets/images/covers/zhaak_2.png';
import zhaak3Img from '../assets/images/covers/zhaak_3.png';
import zhaak4Img from '../assets/images/covers/zhaak_4.png';

import juiceezImg from '../assets/images/covers/juiceez_1.png';

import yutahImg from '../assets/images/covers/yutah_1.png';

import wazakiss1Img from '../assets/images/covers/wazakiss_1.png';
import wazakiss2Img from '../assets/images/covers/wazakiss_2.png';

// import fonts
import tuskerGrotesk from '../assets/fonts/TuskerGrotesk-4700Bold.woff2';
import dharmaGothic from '../assets/fonts/DharmaGothic.woff2';
import futureFriends from '../assets/fonts/FutureFriends.ttf';
import helveticaNeue from '../assets/fonts/HelveticaNeueLTProMdCn.otf';

const ARTISTS: Artist[] = [
  {
    label: 'Gentle Mates',
    group: 'm8',
    externalLink: 'https://www.gentlemates.com',
    banners: [
      { cover: m8_1Img, index: 1 },
      { cover: m8_2Img, index: 2 },
      { cover: m8_3Img, index: 3 },
      { cover: m8_4Img, index: 4 },
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
    inputs: [{ id: 'username', type: 'text', placeholder: 'ZHAAK' }],
    banners: [
      { cover: zhaak1Img, index: 1 },
      { cover: zhaak2Img, index: 2 },
      { cover: zhaak3Img, index: 3 },
      { cover: zhaak4Img, index: 4 },
    ],
  },
  {
    label: 'Wazakiss',
    group: 'wazakiss',
    externalLink: 'https://linktr.ee/Wazakiss.Design',
    inputs: [
      {
        id: 'username',
        type: 'text',
        maxChars: 11,
        placeholder: 'WAZAKISS',
      },
    ],
    banners: [
      { cover: wazakiss1Img, index: 1 },
      { cover: wazakiss2Img, index: 2 },
    ],
  },
  {
    label: 'Juiceez',
    group: 'juiceez',
    externalLink: 'https://x.com/Its_Juiceez',
    inputs: [
      { id: 'username', type: 'text', maxChars: 15, placeholder: 'M8 JUICEEZ' },
    ],
    banners: [{ cover: juiceezImg, index: 1 }],
  },
  {
    label: 'Yutah',
    group: 'yutah',
    externalLink: 'https://www.behance.net/YutahVisuals',
    inputs: [
      {
        id: 'username',
        type: 'text',
        maxChars: 15,
        placeholder: 'M8 YUTAH',
      },
    ],
    banners: [{ cover: yutahImg, index: 1 }],
  },
];

const BANNER_FONTS: BannerFonts = {
  m8: [
    null,
    {
      username: {
        family: 'TuskerGrotesk',
        url: tuskerGrotesk,
        color: '#ffffff',
        sizeMultiplier: 0.045,
        maxWidth: 0.206,
        xMultiplier: 0.778,
        yMultiplier: 0.34,
        textAlign: 'right',
      },
      role: {
        family: 'Helvetica',
        color: '#ffffff',
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
        color: '#ffffff',
        sizeMultiplier: 0.045,
        maxWidth: 0.206,
        xMultiplier: 0.778,
        yMultiplier: 0.34,
        textAlign: 'right',
      },
      role: {
        family: 'Helvetica',
        color: '#ffffff',
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
    {
      username: {
        family: 'DharmaGothic',
        url: dharmaGothic,
        color: '#d1d5e5',
        sizeMultiplier: 0.08,
        fixedSize: true,
        maxWidth: 0.32,
        xMultiplier: 0.66,
        yMultiplier: 0.5,
        textAlign: 'center',
      },
    },
    {
      username: {
        family: 'DharmaGothic',
        url: dharmaGothic,
        color: '#d1d5e5',
        sizeMultiplier: 0.08,
        fixedSize: true,
        maxWidth: 0.32,
        xMultiplier: 0.66,
        yMultiplier: 0.5,
        textAlign: 'center',
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
  yutah: [
    null,
    {
      username: {
        family: 'FutureFriends',
        url: futureFriends,
        color: '#E6E6E5',
        sizeMultiplier: 0.03,
        maxWidth: 0.28,
        xMultiplier: 0.65,
        yMultiplier: 0.43,
        textAlign: 'center',
      },
    },
  ],
  wazakiss: [
    null,
    {
      username: {
        family: 'HelveticaNeue',
        url: helveticaNeue,
        sizeMultiplier: 0.07,
        maxWidth: 0.7,
        xMultiplier: 0.32,
        yMultiplier: 0.46,
        textAlign: 'center',
        letterSpacing: 40,
      },
    },
    {
      username: {
        family: 'HelveticaNeue',
        url: helveticaNeue,
        sizeMultiplier: 0.07,
        maxWidth: 0.7,
        xMultiplier: 0.32,
        yMultiplier: 0.46,
        textAlign: 'center',
        letterSpacing: 40,
      },
    },
  ],
};

export { ARTISTS, BANNER_FONTS };
