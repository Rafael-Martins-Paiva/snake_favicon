export class RandomService {
  int(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}