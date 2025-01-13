type Artist = {
  name: string;
  bannerNumber: number;
};

type Text = {
  value: string;
  font?: string;
  color?: string;
};

type SelectOption = {
  value: string;
  label: string;
};

type ArtistGroup = {
  label: string;
  group: string;
  inputs: {
    id: string;
    type: 'text' | 'select';
    font?: string;
    color?: string;
    default?: string;
    options?: SelectOption[];
  }[];
  covers: {
    icon: string;
    number: number;
  }[];
};

export type { Artist, ArtistGroup, SelectOption, Text };
