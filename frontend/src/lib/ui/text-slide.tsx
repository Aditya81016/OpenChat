import { Component, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  texts: string[];
  interval?: number;
  center?: boolean;
  className?: string;
}

export default class TextSlide extends Component<Props> {
  state = {
    text: "",
  };

  defaults = {
    interval: 5,
  };

  variants = {};

  intervalID: NodeJS.Timeout | undefined;

  componentDidMount(): void {
    const { interval = this.defaults.interval, texts } = this.props;

    this.nextText();
    if (interval > 0 && texts.length <= 1)
      this.intervalID = setInterval(this.nextText, interval * 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalID);
  }

  render(): ReactNode {
    const { text } = this.state;
    let {
      interval = this.defaults.interval,
      center = false,
      className = "",
      texts,
    } = this.props;

    if (interval === 0 || texts.length <= 1) {
      interval = 9999;
    }

    const step = 1 / interval;

    const textVariant = {
      typing: {
        width: ["0%", "100%", "100%", "0%"],
        transition: {
          duration: interval,
          repeat: Infinity,
          times: [0, step, 1 - step, 1],
        },
      },
    };

    return (
      <div className={`text-slide ui ${className}`}>
        <motion.div
          className={`text ${center && "mx-auto"}`}
          variants={textVariant}
          animate="typing"
        >
          {text}
        </motion.div>
        {/* <motion.div
          className="cursor"
          variants={cursorVariant}
          animate="blinking"
        >
          {" "}
        </motion.div> */}
      </div>
    );
  }

  nextText = () => {
    const { texts } = this.props;
    const { text } = this.state;

    let index = texts.indexOf(text) + 1;

    this.setState({
      text: index === texts.length ? texts[0] : texts[index],
    });
  };
}
