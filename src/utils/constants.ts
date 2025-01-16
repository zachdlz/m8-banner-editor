import { type Artist } from './types';

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
    inputs: [{ id: 'username', type: 'text' }],
    banners: [{ cover: zhaakImg, index: 1 }],
  },
];

export { ARTISTS };
