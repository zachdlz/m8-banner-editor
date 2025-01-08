import m8_1Icon from '../../assets/images/covers/m8_1.png';
import m8_2Icon from '../../assets/images/covers/m8_2.png';

export type ArtistGroup = {
  label: string;
  group: string;
  banners: {
    icon: string;
    number: number;
  }[];
};

export const ARTISTS: ArtistGroup[] = [
  {
    label: 'Gentle Mates',
    group: 'm8',
    banners: [
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
