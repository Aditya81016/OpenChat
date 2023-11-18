import { Component, ReactNode } from "react";
import { Theme } from "../modules/types";

interface Props {
  theme?: Theme; // theme of the action block
  icon: string; // icon of display
  iconOn?: "left" | "right"; // position of the icon
  text: string; // text to display
  callback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // the onClick callback for the action
  disabled?: boolean; // diables the task if true
}

export default class ActionBlock extends Component<Props> {
  render(): ReactNode {
    const {
      theme = Theme.light,
      icon,
      iconOn = "left",
      text,
      callback,
      disabled = false,
    } = this.props;

    const flex = { left: "flex-row", right: "flex-row-reverse" }[iconOn];

    return (
      <>
        <button
          className={`action ${theme} ${flex}`}
          onClick={callback}
          disabled={disabled}
        >
          <div className="icon">
            <i className={`fa-solid fa-${icon}`}></i>
          </div>
          <div className="text">{text}</div>
        </button>
      </>
    );
  }
}
