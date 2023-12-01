import { Component, ReactNode } from "react";
import { Theme } from "../modules/types";
import { themeStore } from "../modules/store";
import TextSlide from "../ui/text-slide";
import { motion } from "framer-motion";

interface Props {
  theme?: Theme;
  fill?: boolean;
  texts?: string[];
}

export default class Loading extends Component<Props> {
  state = {
    theme: themeStore.getState().theme,
  };

  render(): ReactNode {
    const {
      theme = this.state.theme,
      fill = false,
      texts = ["Loading...", "Please wait..."],
    } = this.props;

    themeStore.subscribe(() => {
      this.setState({
        theme: themeStore.getState().theme,
      });
    });

    return (
      <div className={`loading component ${theme} ${fill && "fill"}`}>
        <motion.div className={"loader"}></motion.div>
        <div className="text">
          <TextSlide texts={texts} interval={10} center />
        </div>
      </div>
    );
  }
}
