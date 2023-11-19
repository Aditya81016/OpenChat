import { Action, createStore } from "redux";
import { Theme } from "./types";

function themeHandler(
  state = { theme: Theme.light, icon: "sun" },
  action: Action
) {
  switch (action.type) {
    case Theme.light:
      return { theme: Theme.light, icon: "sun" };
    case Theme.dark:
      return { theme: Theme.dark, icon: "moon" };
    default:
      return state;
  }
}

export const themeStore = createStore(themeHandler);
