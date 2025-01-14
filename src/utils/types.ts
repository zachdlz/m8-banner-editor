type Artist = {
  name: string;
  bannerNumber: number;
};

type TextProps = {
  value: string;
  default?: string;
  font?: string;
  color?: string;
};

type SelectProps = {
  value: string;
  options: SelectOption[];
};

type SelectOption = {
  value: string;
  label: string;
};

type ArtistGroup = {
  label: string;
  group: string;
  covers: {
    icon: string;
    number: number;
  }[];
};

export type { Artist, ArtistGroup, SelectOption, TextProps, SelectProps };
