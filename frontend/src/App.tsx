import { Theme } from "./lib/modules/types";
import ChatBlock from "./lib/ui/chat";
import Dropdown from "./lib/ui/dropdown";

export default function App() {
  const create = function () {
    console.log("create");
  };

  const read = function () {
    console.log("read");
  };

  const update = function () {
    console.log("update");
  };

  const del = function (target: any) {
    console.log("delete", target.classList);
  };

  const tasks = { create, read, update, delete: del };

  return (
    <>
      <div className="w-full flex flex-col items-start">
        <ChatBlock
          username="Some User"
          content="Dummy Text"
          time="10:56 AM"
          theme={Theme.dark}
        />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />
        <ChatBlock username="Some User" content="Dummy Text" time="10:56 AM" />

        <ChatBlock variant="sent" content="Dummy Text" time="10:56 AM" />
      </div>

      {/* @ts-ignore */}
      <Dropdown tasks={tasks} target=".chat" theme={Theme.dark} />
    </>
  );
}
