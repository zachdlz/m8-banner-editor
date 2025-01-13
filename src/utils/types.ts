type Artist = {
  name: string;
  bannerNumber: number;
};

type CanvasText = {
  value: string;
  font?: string;
  color?: string;
  xMultiplier?: number;
  yMultiplier?: number;
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
    xMultiplier?: number;
    yMultiplier?: number;
    options?: SelectOption[];
  }[];
  covers: {
    icon: string;
    number: number;
  }[];
};

export type { Artist, ArtistGroup, SelectOption, CanvasText };
