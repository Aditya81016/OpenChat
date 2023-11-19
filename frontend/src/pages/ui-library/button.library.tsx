import { Component, ReactNode } from "react";
import Button from "../../lib/ui/button";
import { Variant } from "../../lib/modules/types";
import ThemeToggle from "../../lib/components/theme-toggle";

export default class ButtonLibrary extends Component {
  render(): ReactNode {
    return (
      <div className="button library">
        <h2>Button</h2>
        <div className="flex justify-evenly">
          <Button
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
