import { Component, ReactNode } from "react";
import { Variant } from "../modules/types";
import { themeStore } from "../modules/store";

interface Props {
  variant?: Variant; // variant of the button
  icon: string; // the icon which the button will have
  callback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // the onClick callback for the button
  disabled?: boolean; // diables the button if true
}

export default class Button extends Component<Props> {
  render(): ReactNode {
    const {
      variant = Variant.secondary,
      icon,
      callback,
      disabled = false,
    } = this.props;

    return (
      <>
        <button
          className={`button ui ${variant}`}
          onClick={callback}
          disabled={disabled}
        >
          <i className={`fa-solid fa-${icon}`}></i>
        </button>
      </>
    );
  }
}
