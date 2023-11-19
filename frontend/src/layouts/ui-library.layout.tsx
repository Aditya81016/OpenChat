import { Component, ElementType, ReactNode, useState } from "react";
import { themeStore } from "../lib/modules/store";
import ThemeToggle from "../lib/components/theme-toggle";
import Button from "../lib/ui/button";

interface Props {
  title: string;
  body: string;
  components: ElementType[];
}

export default class UILibraryLayout extends Component<Props> {
  state = {
    theme: themeStore.getState().theme,
    disabled: false,
    disableIcon: "check",
  };

  render(): ReactNode {
    const { title, body, components } = this.props;
    const { theme, disabled, disableIcon } = this.state;

    // handle theme
    themeStore.subscribe(() => {
      this.setState({
        theme: themeStore.getState().theme,
      });
    });

    return (
      <div className={`ui-library layout ${theme}`}>
        <div className="toggles">
          <ThemeToggle />
          <div className="disable-toggle">
            <Button icon={disableIcon} callback={this.toggleDisable} />
          </div>
        </div>
        <div className="details">
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
        <div className="components">
          {components.map((Component, key) => (
            <div className="component" key={key}>
              <div className="mb-5 h-[0.1rem] bg-slate-500" />
              <Component disabled={disabled} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  toggleDisable = () => {
    console.log("Runs toggle");

    const { disabled } = this.state;
    if (disabled)
      this.setState({
        disabled: false,
        disableIcon: "check",
      });
    else
      this.setState({
        disabled: true,
        disableIcon: "x",
      });
  };
}
