import clsx from "clsx";
import { useId, type ComponentProps } from "react";

export type InputProps = {
  labelText?: string;
  errorMessage?: string;
} & ComponentProps<"input">;

export const Input = ({
  labelText = "",
  errorMessage = "",
  ...props
}: InputProps) => {
  const id = useId();
  const errorId = `${id}-error`;

  const isInvalid = !!errorMessage;
  const ariaLabel = labelText || props.placeholder;
  const describedBy = isInvalid ? errorId : undefined;

  const inputClass = clsx(
    "py-3 px-4 rounded-lg ring-border-gray bg-white ring-2 transition outline-none text-dark-gray",
    isInvalid && "ring-red-400 focus:ring-red-500 placeholder-red-400",
    props.className
  );

  return (
    <div className="flex flex-1 flex-col gap-1">
      {labelText && (
        <label
          className={clsx(
            "text-dark-blue text-sm",
            isInvalid && "text-red-500"
          )}
          htmlFor={id}
        >
          {labelText}
        </label>
      )}

      <input
        className={inputClass}
        {...props}
        id={id}
        aria-label={ariaLabel}
        aria-describedby={describedBy}
        aria-invalid={isInvalid}
      />

      {errorMessage && (
        <p id={errorId} role="alert" className="text-sm text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
