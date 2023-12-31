import { Action, createStore } from "redux";
import { Theme } from "./types";

// Redux theme store
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

// export const wsClient = over(SockJS("http://localhost:8080/ws"));
