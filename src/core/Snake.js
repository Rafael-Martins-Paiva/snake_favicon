export class Snake {
  constructor(blocks) {
    this.blocks = blocks;
    this.reset();
  }
  
  reset() {
    this.body = [{ x: 4, y: 4 }];
    this.dir = { x: 1, y: 0 };
  }
  
  setDirection(dir) {
    if (dir.x === -this.dir.x && dir.y === -this.dir.y) return;
    this.dir = dir;
  }
  
  update(food) {
    const head = {
      x: this.body[0].x + this.dir.x,
      y: this.body[0].y + this.dir.y
    };
    
    if (head.x < 0 || head.x >= this.blocks || head.y < 0 || head.y >= this.blocks) {
      return { dead: true };
    }
    
    if (this.body.some(p => p.x === head.x && p.y === head.y)) {
      return { dead: true };
    }
    
    const ate = head.x === food.x && head.y === food.y;
    
    this.body.unshift(head);
    if (!ate) this.body.pop();
    
    return { dead: false, ate };
  }
}