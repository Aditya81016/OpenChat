import { Component, FormEvent, ReactNode } from "react";
import HomeLayout from "../../layouts/home.layout";
import Input from "../../lib/ui/input";
import Button from "../../lib/ui/button";
import { Variant } from "../../lib/modules/types";
import { getTime } from "../../lib/modules/utils";
import $ from "jquery";
import { wsClient } from "../../lib/modules/store";
import { Frame, Message } from "stompjs";

export default class HomePage extends Component {
  // Variables
  state = {
    chats: [
      {
        username: "Some User",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor.",
        time: "01:51 PM",
      },
      {
        username: "You",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor.",
        time: "01:51 PM",
      },
      {
        username: "Some User",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor.",
        time: "01:51 PM",
      },
      {
        username: "Some User",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor.",
        time: "01:51 PM",
      },
      {
        username: "You",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor.",
        time: "01:51 PM",
      },
      {
        username: "You",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor.",
        time: "01:51 PM",
      },
    ],
    userList: [
      { username: "You", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
      { username: "SomeUser", time: getTime() },
    ],
    actionList: [
      {
        text: "Administrate",
        callback: () => {
          console.log("Administrate");
        },
        icon: "user-gear",
      },
      {
        text: "GitHub",
        callback: () => {
          console.log("GitHub");
        },
        icon: "github",
        iconParent: "brands",
      },
      {
        text: "About",
        callback: () => {
          console.log("About");
        },
        icon: "info",
      },
    ],
    value: "",
    sent: false,
  };

  // the dropdown tasks
  dropdownTasks = {
    // the key is the query for the dropdown targets
    // the value is an object with method to map to dropdown tasks
    ".chats": {
      create: () => {
        console.log("Create");
      },
      read: () => {
        console.log("Read");
      },
      update: () => {
        console.log("Update");
      },
      delete: () => {
        console.log("Delete");
      },
    },
  };

  render(): ReactNode {
    const { chats, userList, actionList } = this.state;

    return (
      <HomeLayout
        chats={chats}
        TextForm={this.RenderedInput}
        dropdownTasks={this.dropdownTasks}
        userList={userList}
        actions={actionList}
      />
    );
  }

  componentDidMount(): void {
    this.toRecentChats();
    wsClient.connect({}, this.onSocketConnect);
  }

  // Renders
  RenderedInput = () => {
    return (
      <form onSubmit={this.onSubmit}>
        <Input
          controllers={[this.state.value, this.setValue]}
          placeholder="Enter Text"
        />
        <Button variant={Variant.primary} icon="paper-plane" type="submit" />
      </form>
    );
  };

  // Methods
  setValue = (value: string): void => {
    this.setState({
      value,
    });
  };

  onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { chats, value } = this.state;

    if (this.state.value !== "") {
      const message = {
        username: "You",
        content: value,
        time: getTime(),
      };

      wsClient.send("/app/messages", {}, JSON.stringify(message));

      this.setState({
        value: "",
        chats: [...chats, message],
        sent: true,
      });

      this.toRecentChats();
    }
  };

  toRecentChats = (): void => {
    setTimeout(() => {
      $(".chats").scrollTop($(".chats").prop("scrollHeight"));
    });
  };

  // Web Socket Methods
  onSocketConnect = (): void => {
    wsClient.subscribe("/topic/messages", (message: Message) => {
      console.log("Received:", message);

      if (this.state.sent) {
        this.setState({
          sent: false,
        });
      } else {
        const msg = JSON.parse(message.body);
        msg.username = "Some User";
        this.setState({
          chats: [...this.state.chats, msg],
        });
        this.toRecentChats();
      }
    });
  };
  onSocketError = (): void => {};
}
