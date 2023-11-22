import { Component, FormEvent, ReactNode } from "react";
import HomeLayout from "../../layouts/home.layout";
import Input from "../../lib/ui/input";
import Button from "../../lib/ui/button";
import { Variant } from "../../lib/modules/types";
import { getTime } from "../../lib/modules/utils";
import $ from "jquery";

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
  };

  // the dropdown tasks
  dropdownTasks = {
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
  setValue = (value: string) => {
    this.setState({
      value,
    });
  };

  onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.value !== "") {
      this.setState({
        value: "",
        chats: [
          ...this.state.chats,
          {
            username: "You",
            content: this.state.value,
            time: getTime(),
          },
        ],
      });
      this.toRecentChats();
    }
  };

  toRecentChats = () => {
    setTimeout(() => {
      $(".chats").scrollTop($(".chats").prop("scrollHeight"));
    });
  };
}
