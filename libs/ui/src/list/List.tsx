import React from "react";

// List Component
export type List = React.HTMLAttributes<HTMLUListElement>;

export const List = React.forwardRef<HTMLUListElement, List>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <ul ref={forwardedRef} {...props} className={className}>
        {props.children}
      </ul>
    );
  },
);

List.displayName = "List";
