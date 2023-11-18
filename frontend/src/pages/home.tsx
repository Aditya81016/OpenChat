import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render(): ReactNode {
    return (
      <>
        Home <br />
        <Link to="/ui-library">UI Library</Link>
      </>
    );
  }
}
