import { createContext } from "@rhinobase/utils";

export const [MenuBarProvider, useMenuBarContext] =
  createContext<MenuBarContext>({
    name: "MenuBarContext",
    hookName: "useMenuBarContext",
    providerName: "<MenuBar />",
  });

export interface MenuBarContext {
  menuSize?: "sm" | "base" | "lg";
}