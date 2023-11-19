import { Component, ReactNode, useState } from "react";
import { Theme } from "../modules/types";
import { Tailwindest } from "tailwindest";
import { themeStore } from "../modules/store";

interface Props {
  theme?: Theme; // the theme of the component
  type?: React.HTMLInputTypeAttribute | undefined; // the type of input
  placeholder?: string; // the placeholder of the input
  width?: Tailwindest["width"]; // the width of the input as a tailwind class
  controllers: [
    string,
    /* type of setFunction from a useState hook */
    React.Dispatch<React.SetStateAction<string>> | ((value: string) => void)
  ]; // an array containing the variable and function from a useState hook to control the value of the input
}

export default class Input extends Component<Props> {
  state = {
    theme: themeStore.getState().theme,
  };

  render(): ReactNode {
    const {
      theme = this.state.theme,
      type = "text",
      placeholder = "",
      width = "w-full",
      controllers,
    } = this.props;
    const [value, setValue] = controllers;

    // handles theme
    themeStore.subscribe(() => {
      this.setState({
        theme: themeStore.getState().theme,
      });
    });

    return (
      <>
        <input
          type={type}
          placeholder={placeholder}
          className={`input ui ${theme} ${width}`}
          value={value}
          onInput={(e) => {
            // @ts-ignore
            setValue(e.target.value);
          }}
        />
      </>
    );
  }
}
