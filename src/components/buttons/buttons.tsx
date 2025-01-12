type ButtonProps = {
  icon?: React.ReactNode;
  text?: string;
  variant: 'primary' | 'secondary';
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 rounded-md px-3 py-2 text-sm w-full ${
        props.variant === 'primary'
          ? 'bg-foreground-accent text-white hover:bg-foreground-accentHover focus:ring-2 focus:ring-foreground-accentHover focus:ring-offset-1'
          : 'bg-white hover:bg-gray-100 text-foreground-primary focus:ring-2 focus:ring-gray-200 focus:ring-offset-1'
      }`}
      onClick={props.onClick}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
