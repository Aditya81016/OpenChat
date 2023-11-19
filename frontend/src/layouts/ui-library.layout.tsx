import { Component, ElementType, ReactNode, useState } from "react";
import { themeStore } from "../lib/modules/store";
import ThemeToggle from "../lib/components/theme-toggle";

interface Props {
  title: string;
  body: string;
  components: ElementType[];
}

export default class UILibraryLayout extends Component<Props> {
  state = {
    theme: themeStore.getState().theme,
  };

  render(): ReactNode {
    const { title, body, components } = this.props;
    const { theme } = this.state;

    themeStore.subscribe(() => {
      this.setState({
        theme: themeStore.getState().theme,
      });
    });

    return (
      <div className={`ui-library layout ${theme}`}>
        <ThemeToggle />
        <div className="details">
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
        <div className="components">
          {components.map((Component, key) => (
            <div className="component" key={key}>
              <div className="mb-5 h-[0.1rem] bg-slate-500" />
              <Component key={key} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
