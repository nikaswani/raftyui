import * as DisclosurePrimitive from "@radix-ui/react-accordion";
import { ComponentProps, forwardRef } from "react";
import React from "react";
import { IconType } from "react-icons";
import { HiChevronDown } from "react-icons/hi2";
import { classNames } from "@rhinobase/lib";
import { AccordionContext, AccordionProvider, useAccordionContext } from "./context";

//AccordionComponent

type AccordionProps = AccordionContext & ComponentProps<typeof DisclosurePrimitive["Root"]>;
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, size = "md", ...props }, forwardedRef) => (
    <AccordionProvider value={{ size }}>
      <DisclosurePrimitive.Root {...props} ref={forwardedRef} className={classNames("w-full", className)}>
        {children}
      </DisclosurePrimitive.Root>
    </AccordionProvider>
  )
);

//AccordionItemComponent

type AccordionItemProps = ComponentProps<typeof DisclosurePrimitive["Item"]>;
export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <DisclosurePrimitive.Item {...props} className={classNames("w-full", className)} ref={forwardedRef}>
        {children}
      </DisclosurePrimitive.Item>
    );
  }
);

//AccordionTriggerComponent
type AccoudionButtonProps = AccordionContext &
  ComponentProps<typeof DisclosurePrimitive["Trigger"]> & {
    openIcon?: IconType;
    closeIcon?: IconType;
  };
export const AccordionButton = React.forwardRef<HTMLButtonElement, AccoudionButtonProps>(
  ({ children, className, openIcon: OpenIcon, closeIcon: CloseIcon, ...props }, forwardedRef) => {
    const { size } = useAccordionContext();
    return (
      <DisclosurePrimitive.Header>
        <DisclosurePrimitive.Trigger
          className={classNames(
            size == "sm" && "px-lg py-base text-sm",
            size == "md" && "px-lg py-md",
            size == "lg" && "px-lg py-lg text-lg",
            "text-secondary-700 hover:bg-secondary-50/80 dark:text-secondary-300 dark:hover:bg-secondary-800/20 group flex w-full items-center justify-between font-medium transition-all",
            className
          )}
          {...props}
          ref={forwardedRef}>
          {children}
          <>
            {OpenIcon && typeof OpenIcon == "function" && (
              <OpenIcon className="hidden stroke-1 group-data-[state=open]:block" />
            )}
            {CloseIcon && typeof CloseIcon == "function" && (
              <CloseIcon className="stroke-1 group-data-[state=close]:block group-data-[state=open]:hidden" />
            )}
            {!OpenIcon && !CloseIcon && (
              <HiChevronDown className="transform stroke-1 duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:transform" />
            )}
          </>
        </DisclosurePrimitive.Trigger>
      </DisclosurePrimitive.Header>
    );
  }
);

//AccordionContentComponent

type AccordionContentProps = ComponentProps<typeof DisclosurePrimitive["Content"]>;
export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useAccordionContext();
    return (
      <DisclosurePrimitive.Content
        className={classNames(
          size == "sm" && "px-lg pb-lg pt-base text-sm",
          size == "md" && "px-lg pt-md pb-xl",
          size == "lg" && "px-lg pt-md pb-xl",
          "dark:text-secondary-100 w-full",
          className
        )}
        {...props}
        ref={forwardedRef}
        {...props}>
        {children}
      </DisclosurePrimitive.Content>
    );
  }
);
