import { Component, ReactNode } from "react";
import { Variant } from "../modules/types";

interface Props {
  variant?: Variant; //variant of the user block
  username: string; // username to display
  time: string; // time to display
}

export default class UserBlock extends Component<Props> {
  render(): ReactNode {
    let { variant = Variant.secondary, username, time } = this.props;

    return (
      <>
        <div className={`user ui ${variant}`}>
          <div className="username">{username}</div>
          <div className="time">Joined at {time}</div>
        </div>
      </>
    );
  }
}
