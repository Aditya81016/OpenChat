import { Component, ReactNode } from "react";
import { Theme } from "../modules/types";
import { themeStore } from "../modules/store";
import Loading from "../components/loading";
import TextSlide from "./text-slide";

export enum StateEnum {
  stable = "stable",
  loading = "loading",
  connecting = "connecting",
  disconnected = "disconnected",
  offline = "offline",
  error = "error",
  auto = "auto",
}

interface Props {
  theme?: Theme;
  state?: StateEnum;
  errorTexts?: string[];
}

export default class State extends Component<Props> {
  state = {
    theme: themeStore.getState().theme,
    state: StateEnum.stable,
  };

  render(): ReactNode {
    const {
      theme = this.state.theme,
      state = this.state.state,
      errorTexts = [],
    } = this.props;

    // handles theme
    themeStore.subscribe(() => {
      this.setState({
        theme: themeStore.getState().theme,
      });
    });

    console.log(theme);

    return (
      <div className={`state ui ${theme} ${state} `}>
        {state === StateEnum.loading && <Loading />}{" "}
        {state === StateEnum.connecting && <Connecting />}
        {state === StateEnum.disconnected && <Disconnected />}
        {state === StateEnum.offline && <Offline />}
        {state === StateEnum.error && <Error texts={errorTexts} />}
      </div>
    );
  }
}

function Connecting() {
  return (
    <div className="connecting element ">
      <i className="fa-solid fa-triangle-exclamation text-[3.5rem] text-red-500"></i>
      <TextSlide
        className="text-sm"
        center
        interval={10}
        texts={["Connecting...", "Please check your internet connection..."]}
      />
    </div>
  );
}

function Disconnected() {
  return (
    <div className="disconnect element ">
      <i className="fa-solid fa-link-slash text-red-500"></i>
      <TextSlide
        className="text-sm"
        center
        interval={10}
        texts={[
          "Disconnected...",
          "Refresh the page with a better internet connection...",
        ]}
      />
    </div>
  );
}

function Offline() {
  return (
    <div className="offline element ">
      <i className="fa-solid fa-circle-exclamation text-[3.5rem] text-red-500"></i>
      <TextSlide
        className="text-sm"
        center
        interval={10}
        texts={[
          "You are offline...",
          "Please check your internet connection...",
        ]}
      />
    </div>
  );
}

interface ErrorProps {
  texts: string[];
}
function Error({ texts }: ErrorProps) {
  return (
    <div className="error element ">
      <i className="fa-solid fa-circle-xmark text-[3.5rem] text-red-500"></i>
      <TextSlide
        className="text-sm"
        center
        interval={10}
        texts={["There was as error...", ...texts]}
      />
    </div>
  );
}
