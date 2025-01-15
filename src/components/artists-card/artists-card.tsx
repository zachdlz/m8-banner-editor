import { type Banner, type Artist } from '../../utils/types';
import { ARTISTS } from '../../utils/constants';
import { memo } from 'react';

type ArtistsCardProps = {
  onBannerChange: (banner: Banner) => void;
  selectedBanner: Banner;
};

type ArtistImageProps = {
  banner: Artist['banners'][number];
  artistGroup: string;
  onSelect: () => void;
  isSelected: boolean;
};

const ArtistImage = memo(
  ({ banner, artistGroup, onSelect, isSelected }: ArtistImageProps) => (
    <div
      className={`rounded-xl p-[2px] border-2 ${
        isSelected ? 'border-foreground-accent' : 'border-transparent'
      }`}
    >
      <img
        src={banner.cover}
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
          <div key={artistGroup.group} className="flex flex-col gap-1">
            <h3 className="text-foreground-primary text-md">
              ~ {artistGroup.label}
            </h3>
            <div className="flex items-center gap-2">
              {artistGroup.banners.map((banner) => (
                <ArtistImage
                  key={`${artistGroup.group}-${banner.index}`}
                  banner={banner}
                  artistGroup={artistGroup.group}
                  onSelect={() =>
                    props.onBannerChange({
                      group: artistGroup.group,
                      index: banner.index,
                    })
                  }
                  isSelected={
                    props.selectedBanner?.group === artistGroup.group &&
                    props.selectedBanner?.index === banner.index
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
