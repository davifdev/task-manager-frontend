import clsx from "clsx";
import type { ComponentProps } from "react";

type ButtonVariants = "default" | "ghost" | "danger" | "cancel";
type ButtonSizes = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
} & ComponentProps<"button">;

export const Button = ({
  variant = "default",
  size = "sm",
  ...props
}: ButtonProps) => {
  const buttonVariants: Record<ButtonVariants, string> = {
    default: "bg-primary text-white",
    ghost: "bg-transparent text-dark-gray",
    danger: "bg-danger text-white",
    cancel: "bg-light-gray text-dark-blue",
  };

  const buttonSizes: Record<ButtonSizes, string> = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-2",
    lg: "text-base px-9 py-2",
  };

  const buttonClass = clsx(
    buttonVariants[variant],
    buttonSizes[size],
    "flex items-center rounded-sm justify-center cursor-pointer gap-1 transiton disabled:cursor-not-allowed disabled:opacity-35, font-semibold hover:opacity-80",
    props.className
  );

  return <button {...props} className={buttonClass} />;
};
