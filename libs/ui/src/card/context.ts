import { createContext } from "../utils";

export const [CardProvider, useCardContext] = createContext<CardContext>({
  name: "CardContext",
  hookName: "useCardContext",
  providerName: "<Card />",
});

export interface CardContext {
  readonly size: "sm" | "md" | "lg";
  readonly variant: "outline" | "elevated";
  readonly isUnstyled: boolean;
  readonly has: {
    header: boolean;
    footer: boolean;
  };
}
