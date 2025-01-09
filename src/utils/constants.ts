import { type ArtistGroup } from './types';

import m8_1Icon from '../assets/images/covers/m8_1.png';
import m8_2Icon from '../assets/images/covers/m8_2.png';

const ARTISTS: ArtistGroup[] = [
  {
    label: 'Gentle Mates',
    group: 'm8',
    inputs: [
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
    covers: [
      { icon: m8_1Icon, number: 1 },
      { icon: m8_2Icon, number: 2 },
    ],
  },
  // {
  //   label: 'Zhaak',
  //   group: 'zhaak',
  //   banners: [{ icon: zhaakIcon, number: 1 }],
  // },
];

export { ARTISTS };
