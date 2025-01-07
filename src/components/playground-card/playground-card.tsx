import { EraseIcon } from '../../assets/icons';
import Button from '../buttons';
import TextInput from '../text-input';

type PlaygroundCardProps = {
  username: string;
  role: string;
  onUsernameChange: (username: string) => void;
  onRoleChange: (role: string) => void;
};

const PlaygroundCard = (props: PlaygroundCardProps) => {
  return (
    <div className="order-2 xl:order-none min-w-[280px] bg-white border border-border rounded-lg px-5 pt-4 pb-5 flex flex-col gap-3 font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-figtree">
        Playground
      </h2>
      <div className="flex flex-col gap-1">
        <TextInput
          label="Ton pseudo"
          helperText="Maximum 15 caractères"
          maxLength={15}
          placeholder="SOUEEZIE"
          value={props.username}
          onChange={(value) => props.onUsernameChange(value)}
        />
        <TextInput
          label="Ton rôle"
          placeholder="CEO OF LEAK"
          value={props.role}
          onChange={(value) => props.onRoleChange(value)}
        />
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
