import Select from 'react-select';
import { SelectOption } from '../../utils/types';

type SelectProps = {
  id: string;
  label?: string;
  options: SelectOption[];
  value: SelectOption;
  searchable?: boolean;
  onChange: (value: SelectOption) => void;
};

const SelectInput = (props: SelectProps) => {
  return (
    <div className="flex flex-col gap-1 mt-1">
      {props.label && (
        <label
          htmlFor={`${props.id}-input`}
          className="text-foreground-primary text-sm flex justify-between"
        >
          {props.label}
        </label>
      )}
      <Select<{ value: string; label: string }>
        inputId={`${props.id}-input`}
        unstyled
        isSearchable={props.searchable || false}
        classNames={{
          control: (state) =>
            `border border-border rounded-md px-3 py-2 text-sm ${
              state.isFocused ? 'ring-2 ring-foreground-accent' : ''
            }`,
          dropdownIndicator: () => 'text-foreground-secondary',
          menu: () => 'relative z-[100]',
          menuList: () =>
            'text-foreground-primary border border-border rounded-md mt-2 text-sm bg-background z-50',
          option: () =>
            'py-2 px-3 hover:bg-gray-100 active:bg-gray-200 hover:text-black text-sm bg-background',
        }}
        styles={{
          control: () => ({ cursor: 'pointer', display: 'flex' }),
          option: () => ({ cursor: 'pointer' }),
        }}
        options={props.options}
        value={props.value}
        onChange={(option) => option && props.onChange(option)}
      />
    </div>
  );
};

export default SelectInput;
