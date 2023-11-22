import { themeStore } from "../modules/store";
import { Theme, Variant } from "../modules/types";
import { Component, ReactNode } from "react";

interface Props {
  theme?: Theme; // theme of the chatblock
  variant?: Variant; // variant of the chat block
  username: string; // username to display
  content: string; // content to display
  time: string; // time to display
}

export default class ChatBlock extends Component<Props> {
  state = {
    theme: themeStore.getState().theme,
  };

  render(): ReactNode {
    const {
      theme = this.state.theme,
      variant = Variant.secondary,
      username,
      content,
      time,
    } = this.props;

    // handles theme
    themeStore.subscribe(() => {
      this.setState({
        theme: themeStore.getState().theme,
      });
    });

    return (
      <>
        <div className={`chat ui ${theme} ${variant}`}>
          <div className="username">{username}</div>
          <div className="content">{content}</div>
          <div className="time">{time}</div>
        </div>
      </>
    );
  }
}
