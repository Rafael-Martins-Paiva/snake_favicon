export class Renderer {
  constructor(canvas, grid, size) {
    this.ctx = canvas.getContext("2d");
    this.grid = grid;
    this.size = size;
    this.blocks = size / grid;
  }
  
  clear() {
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.size, this.size);
  }
  
  drawFood(food) {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(food.x * this.grid, food.y * this.grid, this.grid, this.grid);
  }
  
  drawSnake(snake) {
    this.ctx.fillStyle = "lime";
    snake.body.forEach(p => {
      this.ctx.fillRect(p.x * this.grid, p.y * this.grid, this.grid, this.grid);
    });
  }
  
  drawGameOver() {
    this.ctx.fillStyle = "red";
    this.ctx.font = "bold 16px sans-serif";
    this.ctx.fillText("GAME", 8, 28);
    this.ctx.fillText("OVER", 8, 48);
  }
}