import { Component, ReactNode } from "react";
import ChatBlock from "../../lib/ui/chat";
import { Variant } from "../../lib/modules/types";
import Dropdown from "../../lib/ui/dropdown";

export default class ChatLibrary extends Component {
  render(): ReactNode {
    const create = (target: HTMLElement) => {
      console.log("trigger: create \ntarget:", target);
    };
    const read = (target: HTMLElement) => {
      console.log("trigger: read \ntarget:", target);
    };
    const update = (target: HTMLElement) => {
      console.log("trigger: update \ntarget:", target);
    };
    const del = (target: HTMLElement) => {
      console.log("trigger: delete \ntarget:", target);
    };
    const tasks = { create, read, update, delete: del };

    return (
      <div className="chat library">
        <h2 className="">ChatBlock & Dropdown</h2>
        <p>right click / hold to trigger dropdown</p>
        <div className="container">
          <ChatBlock
            username="Some User"
            content="This is content of chat block"
            time="11:31 AM"
          />
          <ChatBlock
            username=""
            content="This is content of chat block"
            time="11:31 AM"
            variant={Variant.primary}
          />
        </div>
        <Dropdown target=".ui.chat" tasks={tasks} />
      </div>
    );
  }
}
