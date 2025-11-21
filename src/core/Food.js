export class Food {
  constructor(blocks, randomService) {
    this.blocks = blocks;
    this.random = randomService;
    this.randomize();
  }
  
  randomize() {
    this.x = this.random.int(0, this.blocks);
    this.y = this.random.int(0, this.blocks);
  }
}