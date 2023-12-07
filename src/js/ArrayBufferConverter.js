export default class ArrayBufferConverter {
  constructor() {
    this.bufferContainer = null;
  }

  load(data) {
    this.bufferContainer = new Uint16Array(data);
  }

  toString() {
    return [...this.bufferContainer].reduce(
      (acc, prev) => acc + String.fromCharCode(prev),
      "",
    );
  }

  toStringSecond() {
    return String.fromCharCode(...this.bufferContainer); // это вариация и более эстетичное решение
  }
}
