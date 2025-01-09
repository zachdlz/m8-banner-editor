import Select from 'react-select';
import { SelectOption } from '../../utils/types';

type SelectProps = {
  id: string;
  label?: string;
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: SelectOption) => void;
};

const SelectInput = (props: SelectProps) => {
  return (
    <div className="flex flex-col gap-1 mt-2">
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
        classNames={{
          control: () =>
            'border border-border rounded-md px-3 py-2 text-sm text-foreground-primary',
          dropdownIndicator: () => 'text-foreground-secondary',
        }}
        options={props.options}
        value={props.value}
        onChange={(option) => option && props.onChange(option)}
      />
    </div>
  );
};

export default SelectInput;
