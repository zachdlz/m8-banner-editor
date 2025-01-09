import { Artist } from '../../utils/types';
import { ARTISTS } from '../../utils/constants';

type ArtistsCardProps = {
  onArtistChange: (artist: Artist) => void;
  selectedArtist: Artist;
};

const ArtistsCard = (props: ArtistsCardProps) => {
  return (
    <div className="order-3 xl:order-none min-w-[164px] bg-white border border-border rounded-lg px-5 pt-4 pb-5 flex flex-col gap-3 font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-cal">
        Artistes
      </h2>
      <div>
        {ARTISTS.map((artistGroup) => (
          <div key={artistGroup.group} className="flex flex-col gap-1">
            <h3 className="text-foreground-primary text-md">
              ~ {artistGroup.label}
            </h3>
            <div className="flex items-center gap-2">
              {artistGroup.covers.map((cover) => (
                <div
                  key={`${artistGroup.group}-${cover.number}`}
                  className={`rounded-lg p-[1px] border-2 ${
                    props.selectedArtist?.name === artistGroup.group &&
                    props.selectedArtist?.bannerNumber === cover.number
                      ? 'border-foreground-accent'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={cover.icon}
                    alt={artistGroup.group}
                    className="w-12 h-[46px] cursor-pointer rounded-md"
                    onClick={() =>
                      props.onArtistChange({
                        name: artistGroup.group,
                        bannerNumber: cover.number,
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsCard;
