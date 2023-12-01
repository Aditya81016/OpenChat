import { Component, ReactNode, useState } from "react";
import UILibraryLayout from "../../layouts/ui-library.layout";
import ChatLibrary from "./chat.library";
import InputLibrary from "./input.library";
import ButtonLibrary from "./button.library";
import UserLibrary from "./user.library";
import ActionLibrary from "./action.library";
import TextSlideLibrary from "./text-slide.library";
import StateLibrary from "./state.library";
import ThemeToggle from "../../lib/components/theme-toggle";
import Button from "../../lib/ui/button";

export default class UILibraryPage extends Component {
  state = { disabled: false };

  setDisabled = (b: boolean) => {
    this.setState({
      disabled: b,
    });
  };

  render(): ReactNode {
    const { disabled } = this.state;
    return (
      <div className="ui-library page">
        <UILibraryLayout
          title="UI Library"
          body="The ui library i made for this website, below i showcase it's components along with each of their theme, variant and state"
          components={[
            ChatLibrary,
            InputLibrary,
            ButtonLibrary,
            UserLibrary,
            ActionLibrary,
            TextSlideLibrary,
            StateLibrary,
          ]}
          buttons={[
            <ThemeToggle />,
            <ExportButton disableController={[disabled, this.setDisabled]} />,
          ]}
          disabled={disabled}
        />
      </div>
    );
  }
}

interface ExportButtonProps {
  disableController: [boolean, (b: boolean) => void];
}

function ExportButton({ disableController }: ExportButtonProps) {
  const [disableIcon, setDisableIcon] = useState("check");
  const [disabled, setDisabled] = disableController;

  function toggleDisable() {
    console.log("Runs toggle");

    if (disabled) {
      setDisabled(false);
      setDisableIcon("check");
    } else {
      setDisabled(true);
      setDisableIcon("x");
    }
  }

  return (
    <div className="disable-toggle">
      <Button icon={disableIcon} callback={toggleDisable} />
    </div>
  );
}
