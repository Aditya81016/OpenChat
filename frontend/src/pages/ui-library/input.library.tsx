import { Component, ReactNode } from "react";
import Input from "../../lib/ui/input";

export default class InputLibrary extends Component {
  state = {
    value: "",
  };
  render(): ReactNode {
    const setValue = (value: string) => {
      this.setState({ value });
    };
    return (
      <>
        <div className="input library">
          <h2>Input</h2>
          <Input
            placeholder="Enter some text"
            controllers={[this.state.value, setValue]}
          />
          <div>
            <b>value: </b>
            <span>{this.state.value}</span>
          </div>
        </div>
      </>
    );
  }
}
