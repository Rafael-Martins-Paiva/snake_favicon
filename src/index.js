import { Game } from "./app/Game.js";

const game = new Game();
document.getElementById("restartBtn").onclick = () => game.reset();