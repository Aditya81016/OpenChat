import { Component, ReactNode } from "react";
import Button from "../ui/button";
import { themeStore } from "../modules/store";
import { Theme } from "../modules/types";

interface Props {
  disabled?: boolean;
}

export default class ThemeToggle extends Component<Props> {
  state = {
    theme: themeStore.getState().theme,
    icon: themeStore.getState().icon,
  };
  render(): ReactNode {
    const { disabled } = this.props;

    // handles theme
    const { theme, icon } = this.state;
    themeStore.subscribe(() => {
      this.setState({
        theme: themeStore.getState().theme,
        icon: themeStore.getState().icon,
      });
    });

    function callback() {
      if (theme === Theme.light) themeStore.dispatch({ type: Theme.dark });
      else if (theme === Theme.dark) themeStore.dispatch({ type: Theme.light });
    }

    return (
      <div className="theme-toggle">
        <Button icon={icon} callback={callback} disabled={disabled} />
      </div>
    );
  }
}
