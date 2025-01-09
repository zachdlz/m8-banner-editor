type Artist = {
  name: string;
  bannerNumber: number;
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
    options?: SelectOption[];
  }[];
  covers: {
    icon: string;
    number: number;
  }[];
};

export type { Artist, ArtistGroup, SelectOption };
