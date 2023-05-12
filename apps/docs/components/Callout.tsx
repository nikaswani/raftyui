import React, { ReactNode } from "react";
import { Alert, AlertIcon, AlertTitle } from "@rafty/ui";
export function Callout({
  status = "info",
  title,
  children,
}: {
  status?: "success" | "warning" | "error" | "info";
  title: string;
  children: ReactNode;
}) {
  return (
    <Alert size="lg" status={status} className="!items-start rounded-lg">
      <AlertIcon />
      <div className="flex-1 flex flex-col">
        <AlertTitle>{title}</AlertTitle>
        {children}
      </div>
    </Alert>
  );
}
