import { ARTISTS } from './constants';

type Banner = {
  group: (typeof ARTISTS)[number]['group'];
  index: number;
};

type SelectOption = {
  value: string;
  label: string;
};

type Artist = {
  label: string;
  group: 'm8' | 'zhaak';
  externalLink?: string;
  banners: {
    cover: string;
    index: number;
  }[];
  inputs: {
    id: string;
    type: 'text' | 'select';
    options?: SelectOption[];
  }[];
};

type Font = {
  family: string;
  url?: string;
};

type BannerFonts = {
  [key: string]: (Record<Artist['inputs'][number]['id'], Font> | null)[];
};

export type { Banner, Artist, SelectOption, Font, BannerFonts };
