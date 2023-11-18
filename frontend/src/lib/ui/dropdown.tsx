import { Component, ReactNode, RefObject, createRef } from "react";
import { Theme } from "../modules/types";
import $ from "jquery";
import { match } from "../modules/utils";

// the props for the components
interface Props {
  theme: Theme; // theme of the dropdown
  tasks: any; // tasks the dropdown will perform
  params?: any[]; // the parameters to pass to the tasks' callbacks
  target: string; // the query for the target elements
}

// states of the dropdwon
enum State {
  active = "active",
  inactive = "inactive",
  pseudo = "pseudo",
}

export default class Dropdown extends Component<Props> {
  dropdownRef: RefObject<HTMLDivElement>; // refrence to dropdown element

  state = {
    state: State.inactive, // determines whether dropdown is activated or not
    pos: { x: 0, y: 0 }, // determines the position of the dropdown
    target: undefined, // the target of the dropdown
    corner: "tl", // the corner at which target is present
    dimensions: { width: 0, height: 0 }, // the dimensions of dropdown
  };

  constructor(props: Props) {
    super(props);
    this.dropdownRef = createRef();
  }

  render(): ReactNode {
    const { theme = Theme.light, tasks, params = [] } = this.props;
    const { pos, state, corner, target } = this.state;

    return (
      <>
        <div
          ref={this.dropdownRef}
          className={`dropdown ${corner} ${theme} ${
            state === State.inactive
              ? "hidden"
              : state === State.pseudo
              ? "invisible"
              : ""
          }`}
          style={{ left: pos.x + "px", top: pos.y + "px" }}
        >
          {
            // go through each key in the passed tasks object and create a task element for each of them
            Object.keys(tasks).map((task, i) => (
              <div
                className="task"
                key={i}
                // @ts-ignore
                // clicking the tasks elements triggers their respective function
                onClick={() => tasks[task](target, ...params)}
              >
                {task}
              </div>
            ))
          }
        </div>
      </>
    );
  }

  componentDidMount(): void {
    // adds event listeners on the target to trigger the the dropdown
    $(document).on("contextmenu", this.triggerDropdown);

    // add event listeners on document to disable the dropdown
    $(document).on("click", this.disableDropdown);

    this.getDimensions();
  }

  componentWillUnmount(): void {
    // remove event listener when component unmounts
    $(document).off("contextmenu", this.triggerDropdown);

    // remove event listener when component unmounts
    $(document).off("click", this.disableDropdown);
  }

  // the function to be called when user triggers dropdown
  triggerDropdown = (event: JQuery.ContextMenuEvent) => {
    const { target: query } = this.props;
    const { pageX, pageY, target: element } = event;

    const target = match(element, query);

    // checks if the event target matches the dropdown target
    if (target !== undefined) {
      event.preventDefault();

      this.enableDropdown(pageX, pageY, target);
    }
  };

  // enables dropdown
  enableDropdown(eventX: number, eventY: number, target: HTMLElement) {
    const { innerWidth: vw, innerHeight: vh } = window;
    const { width: dropdownWidth, height: dropdownHeight } =
      this.state.dimensions;

    // if the dimensions of the dropdown stil not captured then
    // make an attempt to capture them again
    if (this.state.dimensions.width === 0 && this.state.dimensions.height === 0)
      this.getDimensions();

    const pos = { x: 0, y: 0 };
    let corner = "";

    // calculates x, y and pointed corner for the dropdown
    if (dropdownWidth + eventX <= vw) {
      pos.x = eventX;
      corner = "l";
    } else {
      pos.x = eventX - dropdownWidth;
      corner = "r";
    }

    if (dropdownHeight + eventY <= vh) {
      pos.y = eventY;
      corner = "t" + corner;
    } else {
      pos.y = eventY - dropdownHeight;
      corner = "b" + corner;
    }

    // sets the new state of the dropdown
    this.setState({
      pos,
      corner,
      state: State.active,
      target,
    });
  }

  // disables dropdown
  disableDropdown = () => {
    this.setState({ state: State.inactive });
  };

  // gets the dimensions of dropdown
  getDimensions() {
    console.log("runs");

    const dropdown = this.dropdownRef.current as HTMLElement;

    const { innerWidth: vw, innerHeight: vh } = window;

    // set the state of dropdown to pseudo and move it to very end of the page
    this.setState({ pos: { x: vw, y: vh }, state: State.pseudo });

    // wait for some time and then capture the width and height of the dropdown
    setTimeout(() => {
      const { width, height } = dropdown.getBoundingClientRect();

      // wait for some time and then set the dropdown to be inactive
      setTimeout(() => {
        this.setState({ dimensions: { width, height }, state: State.inactive });
      }, 10);
    }, 10);
  }
}
