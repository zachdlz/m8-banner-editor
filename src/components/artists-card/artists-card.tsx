import { Artist, ArtistGroup } from '../../utils/types';
import { ARTISTS } from '../../utils/artists';
import { memo } from 'react';

type ArtistsCardProps = {
  onArtistChange: (artist: Artist) => void;
  selectedArtist: Artist;
};

type ArtistImageProps = {
  cover: ArtistGroup['covers'][number];
  artistGroup: string;
  onSelect: () => void;
  isSelected: boolean;
};

const ArtistImage = memo(
  ({ cover, artistGroup, onSelect, isSelected }: ArtistImageProps) => (
    <div
      className={`rounded-xl p-[2px] border-2 ${
        isSelected ? 'border-foreground-accent' : 'border-transparent'
      }`}
    >
      <img
        src={cover.icon}
        alt={artistGroup}
        className="w-12 h-[46px] cursor-pointer rounded-lg"
        onClick={() => onSelect()}
      />
    </div>
  ),
);

const ArtistsCard = (props: ArtistsCardProps) => {
  return (
    <div className="order-3 xl:order-none min-w-[164px] bg-white border border-border rounded-lg px-5 pt-4 pb-5 flex flex-col gap-3 font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-cal">
        Artistes
      </h2>
      <div className="flex flex-col gap-3">
        {ARTISTS.map((artistGroup) => (
          <div key={artistGroup.group} className="flex flex-col">
            <h3 className="text-foreground-primary text-md">
              ~ {artistGroup.label}
            </h3>
            <div className="flex items-center gap-2">
              {artistGroup.covers.map((cover) => (
                <ArtistImage
                  key={`${artistGroup.group}-${cover.number}`}
                  cover={cover}
                  artistGroup={artistGroup.group}
                  onSelect={() =>
                    props.onArtistChange({
                      name: artistGroup.group,
                      bannerNumber: cover.number,
                    })
                  }
                  isSelected={
                    props.selectedArtist?.name === artistGroup.group &&
                    props.selectedArtist?.bannerNumber === cover.number
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsCard;
