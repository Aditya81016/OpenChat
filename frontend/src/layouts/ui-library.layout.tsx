import {
  Component,
  ElementType,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import { themeStore } from "../lib/modules/store";

interface Props {
  title: string;
  body: string;
  components: ElementType[];
  buttons: ReactElement<any, any>[];
  disabled: boolean;
}

export default class UILibraryLayout extends Component<Props> {
  state = {
    theme: themeStore.getState().theme,
  };

  render(): ReactNode {
    const { title, body, components, buttons, disabled } = this.props;
    const { theme } = this.state;

    // handle theme
    themeStore.subscribe(() => {
      this.setState({
        theme: themeStore.getState().theme,
      });
    });

    return (
      <div className={`ui-library layout ${theme}`}>
        <div className="toggles">
          {buttons.map((button, key) => (
            <>{button}</>
          ))}
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
}
