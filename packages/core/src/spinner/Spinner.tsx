import { classNames } from "@rhinobase/utils";
import { CSSProperties } from "react";

// Spinner Component
export type ISpinner = {
  size?: "sm" | "md" | "lg";
  inheritParent?: boolean;
  className: string;
  style: CSSProperties;
};

export function Spinner({ size = "md", ...props }: ISpinner) {
  return (
    <svg
      className={classNames(
        size == "sm" && "text-base",
        size == "md" && "text-2xl",
        size == "lg" && "text-4xl",
        !props.inheritParent && "text-secondary-700 dark:text-secondary-400",
        "animate-spin",
        props.className
      )}
      style={props.style}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z"
      />
    </svg>
  );
}
