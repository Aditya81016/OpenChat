import { Component, ReactNode } from "react";
import Button from "../../lib/ui/button";
import { Variant } from "../../lib/modules/types";
import ThemeToggle from "../../lib/components/theme-toggle";

interface Props {
  disabled: boolean;
}

export default class ButtonLibrary extends Component<Props> {
  render(): ReactNode {
    const { disabled } = this.props;

    return (
      <div className="button library">
        <h2>Button</h2>
        <div className="flex justify-evenly">
          <Button
            disabled={disabled}
            icon="paper-plane"
            variant={Variant.primary}
            callback={() => {
              console.log("send primary button");
            }}
          />
          <ThemeToggle />
        </div>
      </div>
    );
  }
}
