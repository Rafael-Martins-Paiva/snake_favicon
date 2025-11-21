export class InputService {
  constructor() {
    this.queue = [];
    this.listen();
  }
  
  listen() {
    document.addEventListener("keydown", ev => {
      const map = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 }
      };
      if (map[ev.key]) this.queue.push(map[ev.key]);
    });
  }
  
  consume() {
    return this.queue.shift();
  }
}