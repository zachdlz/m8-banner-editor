import banner from '../../assets/images/artists/m8_preview.png';

const ArtistsCard = () => {
  return (
    <div className="min-w-[160px] bg-white border border-border rounded-lg px-5 py-4 flex flex-col gap-3 font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-cal">
        Artistes
      </h2>
      <div className="flex flex-col gap-1">
        <h3 className="text-foreground-primary text-md">~ Gentle Mates</h3>
        <div className="flex items-center gap-2">
          <div className="rounded-lg p-[1px] border-2 border-foreground-accent">
            <img
              src={banner}
              alt="Gentle Mates"
              className="w-12 h-[46px] cursor-pointer rounded-md"
            />
          </div>
          <div className="rounded-lg p-[1px]">
            <div className="bg-gray-50 text-foreground-secondary w-12 h-[46px] rounded-md flex justify-center items-center">
              ?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsCard;
