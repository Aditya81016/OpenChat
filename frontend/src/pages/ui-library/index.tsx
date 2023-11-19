import { Component, ReactNode } from "react";
import UILibrary from "../../layouts/ui-library.layout";
import ChatLibrary from "./chat.library";
import InputLibrary from "./input.library";
import ButtonLibrary from "./button.library";
import UserLibrary from "./user.library";
import ActionLibrary from "./action.library";

export default class UILibraryPage extends Component {
  render(): ReactNode {
    return (
      <div className="ui-library page">
        <UILibrary
          title="UI Library"
          body="The ui library i made for this website, below i showcase it's components along with each of their theme, variant and state"
          components={[
            ChatLibrary,
            InputLibrary,
            ButtonLibrary,
            UserLibrary,
            ActionLibrary,
          ]}
        />
      </div>
    );
  }
}
