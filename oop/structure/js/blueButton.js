import Button from "./button.js";

export default class BlueButton extends Button {
  constructor(x, y, width, height, text) {
    super(x, y, width, height, text);
    this.backgroundColor = "#000099";
  }
}
