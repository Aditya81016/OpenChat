import { Component, ReactNode } from "react";
import ActionBlock from "../../lib/ui/action";

interface Props {
  disabled: boolean;
}

export default class ActionLibrary extends Component<Props> {
  render(): ReactNode {
    const { disabled } = this.props;
    return (
      <div className="action library">
        <h2>ActionBlock</h2>
        <div className="flex max-md:flex-col justify-evenly gap-5">
          <ActionBlock
            disabled={disabled}
            text="Setting"
            icon="cog"
            iconOn="right"
            callback={() => {
              console.log("navigate to settings");
            }}
          />
          <ActionBlock
            disabled={disabled}
            text="About"
            icon="info"
            callback={() => {
              console.log("navigate to about");
            }}
          />
        </div>
      </div>
    );
  }
}
