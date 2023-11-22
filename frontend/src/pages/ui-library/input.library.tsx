import { Component, ReactNode } from "react";
import Input from "../../lib/ui/input";

interface Props {
  disabled: boolean;
}

export default class InputLibrary extends Component<Props> {
  state = {
    value: "",
  };
  render(): ReactNode {
    const { disabled } = this.props;

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
            disabled={disabled}
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
