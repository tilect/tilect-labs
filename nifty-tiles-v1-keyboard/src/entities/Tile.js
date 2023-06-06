class Tile {
  x;
  y;
  vx;
  vy;
  size;
  imgSrc;
  img;

  offsetEdgeX = 0;
  offsetEdgeY = 0;

  p5;
  showImage = true;
  showRectangle = false;
  rotationAngle = 0;
  frameCount = 50;

  constructor(p5, { x, y, vx, vy, imgSrc, size, showRectangle, showImage }) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
    this.imgSrc = imgSrc;
    this.showRectangle = showRectangle || false;
    this.showImage = showImage || true;
  }

  checkWindowCollision() {
    if (this.x < 0 || this.x >= this.p5.width - this.size) {
      this.vx *= -1; // reverse x velocity if hit left or right edge
      this.x = this.p5.constrain(this.x, 0, this.p5.width - this.size); // keep image within screen edges
    }

    if (this.y < 0 || this.y > this.p5.height - this.size) {
      this.vy *= -1; // reverse y velocity if hit top or bottom edge
      this.y = this.p5.constrain(this.y, 0, this.p5.height - this.size); // keep image within screen edges
    }
  }

  rotateImage() {
    if (this.rotationAngle >= 360) {
      this.rotationAngle = 0;
    } else {
      this.rotationAngle += 45;
    }
  }

  toggleShowImage() {
    this.showImage = !this.showImage;
  }

  update() {
    this.x += this.vx; // update position based on velocity
    this.y += this.vy;

    this.checkWindowCollision();
  }

  load() {
    this.img = this.p5.loadImage(this.imgSrc);

    // this.img = loadSVG(this.imgSrc);
    // ts-ignore
    // this.img = loadSvg(this.imgSrc);
  }

  render() {
    // Draw image
    // Draw rectangle
    if (this.showRectangle && this.showImage) {
      this.p5.noFill();
      this.p5.rect(this.x, this.y, this.size, this.size);
    }
    this.p5.push(); // save current transformation matrix
    this.p5.translate(this.x + this.size / 2, this.y + this.size / 2); // move to center of image
    this.p5.rotate(this.rotationAngle); // rotate by 45 degrees
    if (this.showImage) {
      this.p5.image(
        this.img,
        -this.size / 2,
        -this.size / 2,
        this.size,
        this.size
      );
    }

    this.p5.pop(); // restore previous transformation matrix

    this.update();
  }
}

export default Tile;
