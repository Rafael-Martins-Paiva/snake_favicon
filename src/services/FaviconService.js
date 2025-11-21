export class FaviconService {
  constructor(linkId, canvas) {
    this.link = document.getElementById(linkId);
    this.canvas = canvas;
  }
  
  update() {
    this.link.href = this.canvas.toDataURL("image/png");
  }
}