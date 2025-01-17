import { EraseIcon } from '../../assets/icons';
import Button from '../buttons';
import TextInput from '../text-input';
import type { Banner, Artist, SelectInput } from '../../utils/types';
import { firstUpperCase, getInput, inputExist } from '../../utils/utils';
import Select from '../select-input';

type PlaygroundCardProps = {
  username: string;
  role: string;
  selectedBanner: Banner;
  supporterLevel: string;
  onUsernameChange: (username: string) => void;
  onRoleChange: (role: string) => void;
  onSupporterLevelChange: (supporterLevel: string) => void;
  inputs: Artist['inputs'];
};

const PlaygroundCard = (props: PlaygroundCardProps) => {
  const usernameInput = getInput(props.selectedBanner.group, 'username');
  const roleInput = getInput(props.selectedBanner.group, 'role');

  return (
    <div className="order-2 xl:order-none min-w-[280px] bg-white border border-border rounded-lg px-5 pt-4 pb-5 flex flex-col gap-3 font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-figtree">
        Playground
      </h2>
      <div className="flex flex-col gap-1">
        {usernameInput && (
          <TextInput
            label="Ton pseudo"
            helperText={
              usernameInput?.type === 'text' && usernameInput.maxChars
                ? `Maximum ${usernameInput.maxChars} caractères`
                : "Longueur limitée à l'espace disponible"
            }
            maxLength={
              usernameInput?.type === 'text' && usernameInput.maxChars
                ? usernameInput.maxChars
                : undefined
            }
            placeholder="SOUEEZIE"
            value={props.username}
            onChange={(value) => props.onUsernameChange(value)}
          />
        )}

        {roleInput && (
          <TextInput
            label="Ton rôle"
            helperText={
              roleInput?.type === 'text' && roleInput.maxChars
                ? `Maximum ${roleInput.maxChars} caractères`
                : "Longueur limitée à l'espace disponible"
            }
            maxLength={
              roleInput?.type === 'text' && roleInput.maxChars
                ? roleInput.maxChars
                : undefined
            }
            placeholder="CEO OF LEAK"
            value={props.role}
            onChange={(value) => props.onRoleChange(value)}
          />
        )}

        {inputExist(props.selectedBanner.group, 'supporter-level') && (
          <Select
            id="supporter-level"
            label="Niveau de soutien"
            options={
              props.inputs.find(
                (input): input is SelectInput =>
                  input.id === 'supporter-level' && input.type === 'select',
              )?.options ?? []
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
            props.onSupporterLevelChange('ultra');
          }}
        />
      </div>
    </div>
  );
};

export default PlaygroundCard;
