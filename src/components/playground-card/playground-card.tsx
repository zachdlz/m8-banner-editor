import { EraseIcon } from '../../assets/icons';
import Button from '../buttons';

type PlaygroundCardProps = {
  username: string;
  role: string;
  onUsernameChange: (username: string) => void;
  onRoleChange: (role: string) => void;
};

const PlaygroundCard = (props: PlaygroundCardProps) => {
  return (
    <div className="order-2 xl:order-none min-w-[20%] bg-white border border-border rounded-lg px-5 pt-4 pb-5 flex flex-col gap-3 font-figtree">
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
            value={props.username}
            onChange={(e) => props.onUsernameChange(e.target.value)}
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
            value={props.role}
            onChange={(e) => props.onRoleChange(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end mt-4 lg:mt-auto">
        <Button
          variant="primary"
          icon={<EraseIcon />}
          text="Annuler les modifications"
          onClick={() => {
            props.onUsernameChange('');
            props.onRoleChange('');
          }}
        />
      </div>
    </div>
  );
};

export default PlaygroundCard;
