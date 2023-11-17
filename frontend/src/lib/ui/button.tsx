import { Component, ReactNode } from "react";

interface Props {
  variant?: "primary" | "secondary";
  icon: string;
  callback: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

export default class Button extends Component<Props> {
  render(): ReactNode {
    const {
      variant = "secondary",
      icon,
      callback,
      disabled = false,
    } = this.props;
    return (
      <>
        <button
          className={`button ${variant}`}
          onClick={callback}
          disabled={disabled}
        >
          <i className={`fa-solid fa-${icon}`}></i>
        </button>
      </>
    );
  }
}
