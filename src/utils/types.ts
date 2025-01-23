import { ARTISTS } from './constants';

type Banner = {
  group: (typeof ARTISTS)[number]['group'];
  index: number;
};

type SelectOption = {
  value: string;
  label: string;
};

type TextInput = {
  id: string;
  type: 'text';
  maxChars?: number;
  placeholder?: string;
};

type SelectInput = {
  id: string;
  type: 'select';
  options: SelectOption[];
};

type Input = TextInput | SelectInput;

type Artist = {
  label: string;
  group: 'm8' | 'zhaak' | 'juiceez' | 'yutah';
  externalLink?: string;
  banners: {
    cover: string;
    index: number;
  }[];
  inputs: Input[];
};

type TextAttributes = {
  family: string;
  url?: string;
  color?: string;
  textAlign?: 'left' | 'right' | 'center';
  maxWidth: number;
  sizeMultiplier: number;
  fixedSize?: boolean;
  xMultiplier: number;
  yMultiplier: number;
};

type BannerFonts = {
  [key: string]: (Record<
    Artist['inputs'][number]['id'],
    TextAttributes
  > | null)[];
};

export type {
  Banner,
  Artist,
  SelectOption,
  TextAttributes,
  BannerFonts,
  SelectInput,
  TextInput,
};
