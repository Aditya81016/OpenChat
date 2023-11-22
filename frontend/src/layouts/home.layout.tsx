import { Component, ElementType, ReactNode } from "react";
import ChatBlock from "../lib/ui/chat";
import { Theme, Variant } from "../lib/modules/types";
import Dropdown from "../lib/ui/dropdown";
import UserBlock from "../lib/ui/user";
import ActionBlock from "../lib/ui/action";
import ThemeToggle from "../lib/components/theme-toggle";
import { themeStore } from "../lib/modules/store";
import Button from "../lib/ui/button";

interface Chat {
  username: string;
  content: string;
  time: string;
}

interface UserListData {
  username: string;
  time: string;
}

interface actionListData {
  text: string;
  icon: string;
  iconParent?: string;
  callback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface Props {
  chats: Chat[]; // the list of chat messages
  TextForm: ElementType; // the form to accept text to send messages
  dropdownTasks?: object; // an object with key being the target and value being array of functions (tasks)
  userList: UserListData[]; // list of online users
  brand?: string; // the name of the website
  actions: actionListData[]; // list of actions
}

export default class HomeLayout extends Component<Props> {
  state = {
    theme: themeStore.getState().theme,
    dashboardActive: false,
  };

  render(): ReactNode {
    const { theme, dashboardActive } = this.state;

    // handle theme
    themeStore.subscribe(() => {
      this.setState({
        theme: themeStore.getState().theme,
      });
    });

    const {
      chats,
      TextForm,
      dropdownTasks = {},
      userList,
      brand = "OpenChat",
      actions,
    } = this.props;

    return (
      <>
        <div className={`home layout ${theme}`}>
          <div className="dashboard-toggle">
            <Button icon="bars" callback={this.toggleDashboard} />
          </div>
          <div className="left">
            <div className="chats">
              {chats.map((chat, key) => (
                <ChatBlock
                  username={chat.username}
                  content={chat.content}
                  time={chat.time}
                  key={key}
                  variant={
                    chat.username === "You"
                      ? Variant.primary
                      : Variant.secondary
                  }
                />
              ))}
            </div>
            <div className="inputs">
              <TextForm />
            </div>
          </div>
          {/* Dashboard */}
          <div className={`right ${dashboardActive ? "active" : ""}`}>
            <div className="navbar">
              <div className="brand">{brand}</div>
              <Button icon="arrow-left" callback={this.toggleDashboard} />
            </div>
            <div className="users">
              {userList.map((user, key) => (
                <UserBlock
                  username={user.username}
                  time={user.time}
                  key={key}
                  variant={
                    user.username === "You"
                      ? Variant.primary
                      : Variant.secondary
                  }
                />
              ))}
            </div>
            <div className="nav">
              <div className="brand">{brand}</div>
              <div className="controllers">
                <ThemeToggle />
                <div className="links">
                  {actions.map((action, key) => (
                    <ActionBlock
                      key={key}
                      text={action.text}
                      icon={action.icon}
                      iconParent={action.iconParent ?? "solid"}
                      iconOn="right"
                      callback={action.callback}
                      theme={Theme.dark}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {Object.keys(dropdownTasks).map((label, key) => (
            // @ts-ignore
            <Dropdown target={label} tasks={dropdownTasks[label]} key={key} />
          ))}
        </div>
      </>
    );
  }
  toggleDashboard = () => {
    this.setState({
      dashboardActive: !this.state.dashboardActive,
    });
  };
}
