type Banner = {
  group: string;
  index: number;
};

type SelectOption = {
  value: string;
  label: string;
};

type Artist = {
  label: string;
  group: string;
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

export type { Banner, Artist, SelectOption };
