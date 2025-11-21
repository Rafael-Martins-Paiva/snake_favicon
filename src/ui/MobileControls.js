export class MobileControls {
  constructor(canvas, inputService) {
    this.input = inputService;
    this.startX = 0;
    this.startY = 0;
    
    canvas.addEventListener("touchstart", e => {
      const t = e.touches[0];
      this.startX = t.clientX;
      this.startY = t.clientY;
    });
    
    canvas.addEventListener("touchend", e => {
      const t = e.changedTouches[0];
      const dx = t.clientX - this.startX;
      const dy = t.clientY - this.startY;
      
      if (Math.abs(dx) > Math.abs(dy)) {
        this.input.queue.push({ x: dx > 0 ? 1 : -1, y: 0 });
      } else {
        this.input.queue.push({ x: 0, y: dy > 0 ? 1 : -1 });
      }
    });
  }
}