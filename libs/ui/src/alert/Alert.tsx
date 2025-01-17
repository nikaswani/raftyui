"use client";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import React from "react";
import { classNames } from "../utils";
import { AlertContext, AlertProvider, useAlertContext } from "./context";

// Alert Component
export const alertClasses = cva("flex w-full items-center", {
  variants: {
    size: {
      sm: "py-2 px-2.5 gap-1.5",
      md: "p-3 gap-3",
      lg: "p-4 gap-4",
    },
    status: {
      success: "",
      warning: "",
      error: "",
      info: "",
    },
    variant: {
      simple: "border",
      solid: "",
      "left-accent": "",
      "top-accent": "",
    },
  },
  compoundVariants: [
    {
      variant: ["simple", "solid"],
      className: "rounded-lg",
    },
    {
      variant: "simple",
      status: "success",
      className:
        "border-green-600 bg-green-300/75 text-secondary-900 dark:bg-green-400/40 dark:text-secondary-100",
    },
    {
      variant: "simple",
      status: "warning",
      className:
        "border-amber-600 bg-amber-300/60 text-secondary-900 dark:text-secondary-100 dark:bg-amber-400/40",
    },
    {
      variant: "simple",
      status: "error",
      className:
        "border-red-500 bg-red-300/75 text-secondary-900 dark:bg-red-400/40 dark:text-secondary-100",
    },
    {
      variant: "simple",
      status: "info",
      className:
        "bg-blue-200 dark:bg-blue-400/40 border-blue-500 text-secondary-900 dark:text-secondary-100",
    },
    {
      variant: "solid",
      status: "success",
      className:
        "border-green-500 bg-green-500 text-white dark:bg-green-400 dark:text-secondary-100",
    },
    {
      variant: "solid",
      status: "warning",
      className:
        "border-amber-500 bg-amber-500 text-white dark:text-secondary-100 dark:bg-amber-400",
    },
    {
      variant: "solid",
      status: "error",
      className:
        "border-red-500 bg-red-500 text-white dark:bg-red-400 dark:text-secondary-100",
    },
    {
      variant: "solid",
      status: "info",
      className:
        "bg-blue-500 dark:bg-blue-400 border-blue-500 text-white dark:text-secondary-100",
    },
    {
      variant: "left-accent",
      status: "success",
      className:
        "border-l-4 border-green-500 bg-green-300/75 text-secondary-900 dark:bg-green-400/40 dark:text-secondary-100",
    },
    {
      variant: "left-accent",
      status: "warning",
      className:
        "border-l-4 border-amber-500 bg-amber-300/60 text-secondary-900 dark:text-secondary-100 dark:bg-amber-400/40",
    },
    {
      variant: "left-accent",
      status: "error",
      className:
        "border-l-4 border-red-500 bg-red-300/75 text-secondary-900 dark:bg-red-400/40 dark:text-secondary-100",
    },
    {
      variant: "left-accent",
      status: "info",
      className:
        "bg-blue-200 dark:bg-blue-400/40 border-l-4 border-blue-500 text-secondary-900 dark:text-secondary-100",
    },
    {
      variant: "top-accent",
      status: "success",
      className:
        "border-t-4 border-green-500 bg-green-300/75 text-secondary-900 dark:bg-green-400/40 dark:text-secondary-100",
    },
    {
      variant: "top-accent",
      status: "warning",
      className:
        "border-t-4 border-amber-500 bg-amber-300/60 text-secondary-900 dark:text-secondary-100 dark:bg-amber-400/40",
    },
    {
      variant: "top-accent",
      status: "error",
      className:
        "border-t-4 border-red-500 bg-red-300/75 text-secondary-900 dark:bg-red-400/40 dark:text-secondary-100",
    },
    {
      variant: "top-accent",
      status: "info",
      className:
        "bg-blue-200 dark:bg-blue-400/40 border-t-4 border-blue-500 text-secondary-900 dark:text-secondary-100",
    },
    {
      variant: "top-accent",
      size: "sm",
      className: "pt-1",
    },
    {
      variant: "top-accent",
      size: "md",
      className: "pt-2",
    },
    {
      variant: "top-accent",
      size: "lg",
      className: "pt-3",
    },
  ],
  defaultVariants: {
    size: "md",
    status: "info",
    variant: "simple",
  },
});

export type Alert = React.HTMLAttributes<HTMLDivElement> &
  Partial<AlertContext>;

export const Alert = React.forwardRef<HTMLDivElement, Alert>(
  (
    {
      className,
      status = "info",
      size = "md",
      variant = "simple",
      isUnstyled = false,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const unstyle = isUnstyled;

    return (
      <AlertProvider value={{ status, size, variant, isUnstyled }}>
        <div
          {...props}
          className={
            unstyle
              ? className
              : classNames(alertClasses({ size, status, variant }), className)
          }
          ref={forwardedRef}
        >
          {children}
        </div>
      </AlertProvider>
    );
  },
);
Alert.displayName = "Alert";

// AlertIcon component
export const alertIconClasses = cva("", {
  variants: {
    size: {
      sm: "h-4 w-4 stroke-2",
      md: "h-5 w-5 stroke-2",
      lg: "h-7 w-7 stroke-[1.5]",
    },
    status: {
      success: "",
      warning: "",
      error: "",
      info: "",
    },
    variant: {
      simple: "",
      solid: "",
      "left-accent": "",
      "top-accent": "",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md", "lg"],
      status: "error",
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-red-500 dark:text-red-200",
    },
    {
      size: ["sm", "md", "lg"],
      status: "warning",
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-amber-600 dark:text-amber-300",
    },
    {
      size: ["sm", "md", "lg"],
      status: "info",
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-blue-500 dark:text-blue-200",
    },
    {
      size: ["sm", "md", "lg"],
      status: "success",
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-green-500 dark:text-green-300",
    },
  ],
  defaultVariants: {
    size: "md",
    status: "info",
    variant: "simple",
  },
});

const ICONS = {
  error: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InformationCircleIcon,
  success: CheckCircleIcon,
};

export type AlertIcon = {
  className?: string;
  isUnstyled?: boolean;
};

export function AlertIcon({ className, isUnstyled = false }: AlertIcon) {
  const {
    size,
    status,
    variant,
    isUnstyled: isParentUnstyled,
  } = useAlertContext();
  const unstyle = isParentUnstyled || isUnstyled;
  const Icon = ICONS[status];

  return (
    <Icon
      className={
        unstyle
          ? className
          : classNames(alertIconClasses({ size, status, variant }), className)
      }
    />
  );
}
AlertIcon.displayName = "AlertIcon";

// AlertTitle component
export const alertTitleClasses = cva("", {
  variants: {
    size: {
      sm: "font-medium",
      md: "text-lg font-medium",
      lg: "text-xl font-medium",
    },
    status: {
      success: "",
      warning: "",
      error: "",
      info: "",
    },
    variant: {
      simple: "",
      solid: "",
      "left-accent": "",
      "top-accent": "",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md", "lg"],
      status: "error",
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-red-500 dark:text-red-200",
    },
    {
      size: ["sm", "md", "lg"],
      status: "warning",
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-amber-600 dark:text-amber-300",
    },
    {
      size: ["sm", "md", "lg"],
      status: "info",
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-blue-500 dark:text-blue-200",
    },
    {
      size: ["sm", "md", "lg"],
      status: "success",
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-green-500 dark:text-green-300",
    },
  ],
  defaultVariants: {
    size: "md",
    status: "info",
    variant: "simple",
  },
});

export type AlertTitle = React.HTMLAttributes<HTMLHeadingElement> & {
  isUnstyled?: boolean;
};

export const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitle>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const {
      size,
      isUnstyled: isParentUnstyled,
      status,
      variant,
    } = useAlertContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <h5
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                alertTitleClasses({ size, status, variant }),
                className,
              )
        }
        ref={forwardedRef}
      >
        {children}
      </h5>
    );
  },
);
AlertTitle.displayName = "AlertTitle";

// AlertDescription component
export const alertDescriptionClasses = cva("", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    variant: {
      simple: "",
      solid: "",
      "left-accent": "",
      "top-accent": "",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md", "lg"],
      variant: ["simple", "left-accent", "top-accent"],
      className: "text-secondary-500 dark:text-secondary-200",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "simple",
  },
});

export type AlertDescription = React.HTMLAttributes<HTMLParagraphElement> & {
  isUnstyled?: boolean;
};

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescription
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled, variant } = useAlertContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <p
      {...props}
      className={
        unstyle
          ? className
          : classNames(alertDescriptionClasses({ size, variant }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </p>
  );
});
AlertDescription.displayName = "AlertDescription";
