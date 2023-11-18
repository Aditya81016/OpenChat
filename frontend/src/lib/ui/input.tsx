import { Component, ReactNode, useState } from "react";
import { Theme } from "../modules/types";
import { Tailwindest } from "tailwindest";

interface Props {
  theme?: Theme; // the theme of the component
  type?: React.HTMLInputTypeAttribute | undefined; // the type of input
  placeholder?: string; // the placeholder of the input
  width?: Tailwindest["width"]; // the width of the input as a tailwind class
  controllers: [
    string,
    /* type of setFunction from a useState hook */
    React.Dispatch<React.SetStateAction<string>>
  ]; // an array containing the variable and function from a useState hook to control the value of the input
}

export default class Input extends Component<Props> {
  render(): ReactNode {
    const {
      theme = Theme.light,
      type = "text",
      placeholder = "",
      width = "w-full",
      controllers,
    } = this.props;
    const [value, setValue] = controllers;

    return (
      <>
        <input
          type={type}
          placeholder={placeholder}
          className={`input ${theme} ${width}`}
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
