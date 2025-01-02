type ButtonProps = {
  icon?: React.ReactNode;
  text?: string;
  variant?: 'primary' | 'secondary';
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 rounded-md px-3 py-2 text-sm w-full ${
        props.variant === 'primary'
          ? 'bg-foreground-accent text-white'
          : 'bg-white text-foreground-primary'
      }`}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
