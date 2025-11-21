export class GameState {
  constructor(blocks, randomService) {
    this.blocks = blocks;
    this.random = randomService;
  }
  
  reset(snake, food) {
    snake.reset();
    food.randomize();
    this.gameOver = false;
  }
}