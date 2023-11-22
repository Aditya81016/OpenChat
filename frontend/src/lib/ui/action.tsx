import { Component, ReactNode } from "react";
import { Theme } from "../modules/types";
import { themeStore } from "../modules/store";

interface Props {
  theme?: Theme; // theme of the action block
  icon: string; // icon of display
  iconParent?: string; // the parent library for your icon
  iconOn?: "left" | "right"; // position of the icon
  text: string; // text to display
  callback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // the onClick callback for the action
  disabled?: boolean; // disables the task if true
}

export default class ActionBlock extends Component<Props> {
  state = {
    theme: themeStore.getState().theme,
  };

  render(): ReactNode {
    const {
      theme = this.state.theme,
      icon,
      iconParent = "solid",
      iconOn = "left",
      text,
      callback,
      disabled = false,
    } = this.props;

    const flex = { left: "flex-row", right: "flex-row-reverse" }[iconOn];

    // handles theme
    themeStore.subscribe(() => {
      this.setState({
        theme: themeStore.getState().theme,
      });
    });

    return (
      <>
        <button
          className={`action ui ${theme} ${flex}`}
          onClick={callback}
          disabled={disabled}
        >
          <div className="icon">
            <i className={`fa-${iconParent} fa-${icon}`}></i>
          </div>
          <div className="text">{text}</div>
        </button>
      </>
    );
  }
}
