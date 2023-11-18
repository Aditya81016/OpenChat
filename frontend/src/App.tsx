import { Theme, Variant } from "./lib/modules/types";
import ActionBlock from "./lib/ui/action";
import UserBlock from "./lib/ui/user";

export default function App() {
  return (
    <>
      <UserBlock username="You" time="12:12 PM" variant={Variant.secondary} />
      <ActionBlock
        icon="cog"
        text="Settings"
        callback={() => {
          console.log("Go to settings");
        }}
        disabled={false}
        theme={Theme.dark}
        iconOn="right"
      />
    </>
  );
}
