import { Component, ReactNode } from "react";
import { Variant } from "../../lib/modules/types";
import UserBlock from "../../lib/ui/user";

export default class UserLibrary extends Component {
  render(): ReactNode {
    return (
      <div className="user library">
        <h2>UserBlock</h2>
        <div className="flex max-md:flex-col justify-evenly gap-5">
          <UserBlock variant={Variant.primary} username="You" time="12:53 PM" />
          <UserBlock username="Some User" time="12:53 PM" />
        </div>
      </div>
    );
  }
}
