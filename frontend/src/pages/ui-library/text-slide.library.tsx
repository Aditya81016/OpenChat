import { Component, ReactNode } from "react";
import TextSlide from "../../lib/ui/text-slide";

export default class TextSlideLibrary extends Component {
  render(): ReactNode {
    const texts = [
      "this is a text slide",
      "this has a defined interval of 5s",
      "this will slide through the list of text passed",
      "all these text you seeing rn were passed",
    ];

    return (
      <div className="text-slide library">
        <h2>Text Slide</h2>
        <div>
          <h3>Normal</h3>
          <TextSlide texts={texts} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3>Center</h3>
          <TextSlide texts={texts} center />
        </div>
      </div>
    );
  }
}
