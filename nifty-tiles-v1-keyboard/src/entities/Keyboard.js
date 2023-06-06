export default class Keyboard {
  constructor({ onKeyDown, onKeyUp }) {
    this.onKeyDown = onKeyDown;
    this.onKeyUp = onKeyUp;
    this.init();
  }

  init() {
    this.keyDownListener = (event) => {
      if (this.onKeyDown) {
        this.onKeyDown(event.key);
      }
    };

    this.keyUpListener = (event) => {
      if (this.onKeyUp) {
        this.onKeyUp(event.key);
      }
    };

    document.addEventListener("keydown", this.keyDownListener);
    document.addEventListener("keyup", this.keyUpListener);
  }

  destroy() {
    document.removeEventListener("keydown", this.keyDownListener);
    document.removeEventListener("keyup", this.keyUpListener);
  }
}
