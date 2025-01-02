import { EraseIcon } from '../../assets/icons';

const PlaygroundCard = () => {
  return (
    <div className="w-1/4 bg-white border border-border rounded-lg px-5 py-4 flex flex-col gap-3 font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-figtree">
        Playground
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="pseudo" className="text-foreground-primary text-sm">
            Ton pseudo
          </label>
          <input
            type="text"
            id="pseudo"
            className="w-full h-9 border border-border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground-accent"
            placeholder="SOUEEZIE"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="role" className="text-foreground-primary text-sm">
            Ton rôle
          </label>
          <input
            type="text"
            id="role"
            className="w-full h-9 border border-border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground-accent"
            placeholder="CEO OF LEAK"
          />
        </div>
      </div>
      <div className="flex justify-end mt-auto">
        <button className="flex items-center gap-3 text-white bg-foreground-accent rounded-md px-3 py-2 text-sm w-full">
          <EraseIcon />
          Annuler les modifications
        </button>
      </div>
    </div>
  );
};

export default PlaygroundCard;
