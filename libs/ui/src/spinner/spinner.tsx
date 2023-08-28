import { classNames } from "@rafty/utils";
import React from "react";

const dimensions = {
  sm: "18px",
  md: "24px",
  lg: "36px",
};

// Spinner Component
export type Spinner = JSX.IntrinsicElements["svg"] & {
  size?: keyof typeof dimensions;
  inheritParent?: boolean;
};

export const Spinner = React.forwardRef<SVGSVGElement, Spinner>(
  (
    { inheritParent = false, size = "md", className, ...props },
    forwardedRef
  ) => {
    return (
      <svg
        {...props}
        className={classNames(
          !inheritParent && "text-secondary-700 dark:text-secondary-400",
          "animate-spin",
          className
        )}
        width={dimensions[size]}
        height={dimensions[size]}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        ref={forwardedRef}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z"
        />
      </svg>
    );
  }
);