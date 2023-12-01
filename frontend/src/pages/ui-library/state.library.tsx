import { Component, ReactNode } from "react";
import State from "../../lib/ui/state";

export default class StateLibrary extends Component {
  render(): ReactNode {
    return (
      <div className="state library">
        <State />
      </div>
    );
  }
}
