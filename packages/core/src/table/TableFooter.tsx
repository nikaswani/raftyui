import { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { useTableContext } from "./context";
import React from "react";

// TableFooter Component (Used in Table Component)
export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  JSX.IntrinsicElements["tfoot"]
>(({ children, ...props }, forwardedRef) => {
  const { size } = useTableContext();
  return (
    <tfoot
      {...props}
      className={classNames(
        size == "sm" && "p-md",
        size == "md" && "px-xl py-lg",
        size == "lg" && "px-3xl py-2xl",
        "bg-secondary-100 text-secondary-500 dark:bg-secondary-700/80 dark:text-secondary-300 text-sm font-semibold",
        props.className
      )}
      ref={forwardedRef}
    >
      {children}
    </tfoot>
  );
});
