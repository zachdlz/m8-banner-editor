import m8_1Icon from '../../assets/images/artists/m8/m8_preview1.png';
import m8_2Icon from '../../assets/images/artists/m8/m8_preview2.png';

type ArtistsCardProps = {
  onBannerChange: (banner: { artist: string; bannerNumber: number }) => void;
  selectedBanner: { artist: string; bannerNumber: number };
};

const ArtistsCard = (props: ArtistsCardProps) => {
  return (
    <div className="min-w-[12%] bg-white border border-border rounded-lg px-5 py-4 flex flex-col gap-3 font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-cal">
        Artistes
      </h2>
      <div className="flex flex-col gap-1">
        <h3 className="text-foreground-primary text-md">~ Gentle Mates</h3>
        <div className="flex items-center gap-2">
          <div
            className={`rounded-lg p-[1px] ${
              props.selectedBanner?.artist === 'm8' &&
              props.selectedBanner?.bannerNumber === 1
                ? 'border-2 border-foreground-accent'
                : ''
            }`}
          >
            <img
              src={m8_1Icon}
              alt="Gentle Mates"
              className="w-12 h-[46px] cursor-pointer rounded-md"
              onClick={() =>
                props.onBannerChange({ artist: 'm8', bannerNumber: 1 })
              }
            />
          </div>
          <div
            className={`rounded-lg p-[1px] ${
              props.selectedBanner?.artist === 'm8' &&
              props.selectedBanner?.bannerNumber === 2
                ? 'border-2 border-foreground-accent'
                : ''
            }`}
          >
            <img
              src={m8_2Icon}
              alt="Gentle Mates"
              className="w-12 h-[46px] cursor-pointer rounded-md"
              onClick={() =>
                props.onBannerChange({ artist: 'm8', bannerNumber: 2 })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsCard;
