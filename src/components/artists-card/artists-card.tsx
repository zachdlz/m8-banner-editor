import m8_1Icon from '../../assets/images/covers/m8_1.png';
import m8_2Icon from '../../assets/images/covers/m8_2.png';
import { Artist } from '../../utils/types';

type ArtistsCardProps = {
  onArtistChange: (artist: Artist) => void;
  selectedArtist: Artist;
};

// TODO: import dynamically artists and images

const ArtistsCard = (props: ArtistsCardProps) => {
  return (
    <div className="order-3 xl:order-none min-w-[164px] bg-white border border-border rounded-lg px-5 pt-4 pb-5 flex flex-col gap-3 font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-cal">
        Artistes
      </h2>
      <div className="flex flex-col gap-1">
        <h3 className="text-foreground-primary text-md">~ Gentle Mates</h3>
        <div className="flex items-center gap-2">
          <div
            className={`rounded-lg p-[1px] ${
              props.selectedArtist?.name === 'm8' &&
              props.selectedArtist?.bannerNumber === 1
                ? 'border-2 border-foreground-accent'
                : ''
            }`}
          >
            <img
              src={m8_1Icon}
              alt="Gentle Mates"
              className="w-12 h-[46px] cursor-pointer rounded-md"
              onClick={() =>
                props.onArtistChange({ name: 'm8', bannerNumber: 1 })
              }
            />
          </div>
          <div
            className={`rounded-lg p-[1px] ${
              props.selectedArtist?.name === 'm8' &&
              props.selectedArtist?.bannerNumber === 2
                ? 'border-2 border-foreground-accent'
                : ''
            }`}
          >
            <img
              src={m8_2Icon}
              alt="Gentle Mates"
              className="w-12 h-[46px] cursor-pointer rounded-md"
              onClick={() =>
                props.onArtistChange({ name: 'm8', bannerNumber: 2 })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsCard;
