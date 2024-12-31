import banner from '../../assets/images/artists/m8_preview.png';

const ArtistsCard = () => {
  return (
    <div className="w-1/6 bg-white border border-border rounded-lg px-5 py-4 flex flex-col gap-3">
      <h2 className="text-foreground-primary text-lg font-bold">Artistes</h2>

      <div className="flex flex-col gap-2.5">
        <h3 className="text-foreground-primary text-md">Gentle Mates</h3>
        <div className="flex items-center ">
          <div className="rounded-lg p-0.5 border-2 border-foreground-accent">
            <img
              src={banner}
              alt="Gentle Mates"
              className="w-12 h-[46px] cursor-pointer rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsCard;
