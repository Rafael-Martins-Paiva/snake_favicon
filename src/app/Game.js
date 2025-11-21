import { Snake } from "../core/Snake.js";
import { Food } from "../core/Food.js";
import { GameState } from "../core/GameState.js";

import { InputService } from "../services/InputService.js";
import { RandomService } from "../services/RandomService.js";
import { FaviconService } from "../services/FaviconService.js";

import { Renderer } from "../ui/Renderer.js";
import { MobileControls } from "../ui/MobileControls.js";

export class Game {
  constructor() {
    this.grid = 8;
    this.size = 64;
    this.blocks = this.size / this.grid;
    
    this.random = new RandomService();
    
    this.snake = new Snake(this.blocks);
    this.food = new Food(this.blocks, this.random);
    this.state = new GameState(this.blocks, this.random);
    
    this.input = new InputService();
    this.rendererFav = new Renderer(document.getElementById("favCanvas"), this.grid, this.size);
    this.rendererMobile = new Renderer(document.getElementById("mobileView"), this.grid, this.size);
    
    this.favicon = new FaviconService("favicon", document.getElementById("favCanvas"));
    
    new MobileControls(document.getElementById("mobileView"), this.input);
    
    this.state.reset(this.snake, this.food);
    
    this.loop();
  }
  
  reset() {
    this.state.reset(this.snake, this.food);
  }
  
  update() {
    if (this.state.gameOver) return;
    
    const dir = this.input.consume();
    if (dir) this.snake.setDirection(dir);
    
    const result = this.snake.update(this.food);
    
    if (result.dead) {
      this.state.gameOver = true;
      return;
    }
    
    if (result.ate) {
      this.food.randomize();
    }
  }
  
  draw(renderer) {
    renderer.clear();
    
    if (this.state.gameOver) {
      renderer.drawGameOver();
      return;
    }
    
    renderer.drawFood(this.food);
    renderer.drawSnake(this.snake);
  }
  
  loop() {
    this.update();
    this.draw(this.rendererFav);
    this.draw(this.rendererMobile);
    
    this.favicon.update();
    
    setTimeout(() => this.loop(), 220);
  }
  
}