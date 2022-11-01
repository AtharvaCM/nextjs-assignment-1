import React from "react";

const BUTTON_STYLES: Record<string, string> = {
  primary:
    "rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  secondary:
    "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
  success:
    "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
  danger:
    "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
};

type Props = {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  variant: "primary" | "secondary" | "success" | "danger";
};

const Button: React.FC<Props> = ({
  variant,
  children,
  className,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      role="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        ${
          BUTTON_STYLES[variant] === undefined
            ? "primary"
            : BUTTON_STYLES[variant]
        } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
