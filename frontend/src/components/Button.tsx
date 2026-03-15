interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children = "buttonText",
  variant = "primary",
  size = "md",
  disabled,
  className,
  onClick,
}: Props) => {
  let buttonVariant;
  let buttonSize;

  switch (variant) {
    case "primary":
      buttonVariant = "bg-blue-400";
      break;
    case "secondary":
      buttonVariant = "bg-green-400";
      break;
    default:
      buttonVariant = "bg-blue-400";
      break;
  }

  switch (size) {
    case "sm":
      buttonSize = "text-sm py-1 px-2";
      break;
    case "md":
      buttonSize = "text-base py-2 px-4";
      break;
    case "lg":
      buttonSize = "text-lg py-3 px-6";
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`rounded font-semibold ${buttonVariant} ${buttonSize} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
