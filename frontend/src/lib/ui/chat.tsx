import { Theme, Variant } from "../modules/types";
import { Component, ReactNode } from "react";

interface Props {
  theme?: Theme; // theme of the chatblock
  variant?: Variant; // variant of the chat block
  username?: string; // username to display
  content: string; // content to display
  time: string; // time to display
}

export default class ChatBlock extends Component<Props> {
  render(): ReactNode {
    const {
      theme = Theme.light,
      variant = Variant.secondary,
      username,
      content,
      time,
    } = this.props;
    return (
      <>
        <div className={`chat ${theme} ${variant}`}>
          <div className="username">{username}</div>
          <div className="content">{content}</div>
          <div className="time">{time}</div>
        </div>
      </>
    );
  }
}
