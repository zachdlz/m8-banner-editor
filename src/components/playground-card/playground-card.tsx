import { EraseIcon } from '../../assets/icons';
import Button from '../buttons';
import TextInput from '../text-input';
import { type ArtistGroup } from '../../utils/types';
import { firstUpperCase, inputExist } from '../../utils/utils';
import Select from '../select-input';

type PlaygroundCardProps = {
  username: string;
  role: string;
  artistGroup: string;
  supporterLevel?: string;
  onUsernameChange: (username: string) => void;
  onRoleChange: (role: string) => void;
  onSupporterLevelChange: (supporterLevel: string) => void;
  inputs: ArtistGroup['inputs'];
};

const PlaygroundCard = (props: PlaygroundCardProps) => {
  return (
    <div className="order-2 xl:order-none min-w-[280px] bg-white border border-border rounded-lg px-5 pt-4 pb-5 flex flex-col gap-3 font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-figtree">
        Playground
      </h2>
      <div className="flex flex-col gap-1">
        {inputExist(props.artistGroup, 'username') && (
          <TextInput
            label="Ton pseudo"
            helperText="Maximum 15 caractères"
            maxLength={15}
            placeholder="SOUEEZIE"
            value={props.username}
            onChange={(value) => props.onUsernameChange(value)}
          />
        )}

        {inputExist(props.artistGroup, 'role') && (
          <TextInput
            label="Ton rôle"
            helperText="Maximum 30 caractères"
            maxLength={30}
            placeholder="CEO OF LEAK"
            value={props.role}
            onChange={(value) => props.onRoleChange(value)}
          />
        )}

        {inputExist(props.artistGroup, 'supporter-level') &&
          props.supporterLevel && (
            <Select
              id="supporter-level"
              label="Niveau de soutien"
              options={
                props.inputs.find((input) => input.id === 'supporter-level')
                  ?.options ?? []
              }
              value={{
                value: props.supporterLevel,
                label: firstUpperCase(props.supporterLevel),
              }}
              onChange={(option) =>
                option && props.onSupporterLevelChange(option.value)
              }
            />
          )}
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
