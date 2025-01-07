type TextInputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  helperText?: string;
  maxLength?: number;
};

const TextInput = (props: TextInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {props.label && (
        <label
          htmlFor={`${props.label}-input`}
          className="text-foreground-primary text-sm flex justify-between"
        >
          {props.label}
        </label>
      )}
      <input
        type="text"
        id={`${props.label}-input`}
        className="w-full h-9 border border-border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground-accent"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        maxLength={props.maxLength}
      />
      {props.helperText && (
        <p className="text-foreground-secondary text-xs text-end">
          {props.helperText}
        </p>
      )}
    </div>
  );
};

export default TextInput;
