import { Component, ReactNode } from "react";
import { Variant } from "../../lib/modules/types";
import ActionBlock from "../../lib/ui/action";

export default class ActionLibrary extends Component {
  render(): ReactNode {
    return (
      <div className="action library">
        <h2>ActionBlock</h2>
        <div className="flex max-md:flex-col justify-evenly gap-5">
          <ActionBlock
            text="Setting"
            icon="cog"
            iconOn="right"
            callback={() => {
              console.log("navigate to settings");
            }}
          />
          <ActionBlock
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
