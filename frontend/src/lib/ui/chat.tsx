import { Theme } from "../modules/types";
import { Component, ReactNode } from "react";

interface Props {
  id?: string;
  theme?: Theme;
  variant?: "received" | "sent";
  username?: string;
  content: string;
  time: string;
}

export default class ChatBlock extends Component<Props> {
  render(): ReactNode {
    const {
      theme = Theme.light,
      variant = "received",
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
