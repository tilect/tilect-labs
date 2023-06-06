import p5 from "p5";
import p5Svg from "p5.js-svg";

import Tile from "./entities/Tile";
import Keyboard from "./entities/Keyboard";

// Init p5.js with SVG support
p5Svg(p5);

/* CONSTANTS:
  Change here for your own IMG_SIZE, IMAGES, BG_COLORS and SIZES
*/
const IMAGES = [
  "tilect_icon.svg",
  "tilect_icon1.svg",
  "tilect_icon2.svg",
  "tilect_icon3.svg",
  "tilect_icon4.svg",
  "tilect_icon5.svg",
  "tilect_icon6.svg",
  "tilect_icon7.svg",
];
const BG_COLORS = [
  "#CC6633",
  "#993333",
  "#996666",
  "#6666099",
  "#CCCCCC",
  "#999999",
];
const DEFAULT_IMG_SIZE = 100;
const SIZES = [100, 200, 300];

/*
  GLOBAL VARIABLES
*/
var keyboard; // Keyboard instance
var nSaves = 1; // Number of images saved
var hasToRenderSketch = true; // Flag to render or not the sketch
var backgroundIndex = 0; // Index of the background color
var lastColor = 0; // Index of the last background color
var lastSizeIndex = 0; // Index of the last size
var showBg = true; // Flag to show or not the background

const tiles = []; // Array of tiles
const container = document.getElementById("p5-canvas"); // Container of the canvas
var svg;

/*
  P5JS FUNCTIONS
*/

const pickRandomImage = () => {
  return IMAGES[Math.floor(Math.random() * IMAGES.length - 1)];
};

function pickRandomBgColor() {
  let randomIndex;
  let color;
  do {
    randomIndex = Math.floor(Math.random() * BG_COLORS.length);
    color = randomIndex;
  } while (color === lastColor);
  lastColor = color;
  return color;
}

function pickRandomSize() {
  let randomIndex;
  let size;
  do {
    randomIndex = Math.floor(Math.random() * SIZES.length);
    size = SIZES[randomIndex];
  } while (size === SIZES[lastSizeIndex]);
  lastSizeIndex = randomIndex;
  return size;
}

const addTile = (p) => {
  const newTile = new Tile(p, {
    x: p.random(p.width - DEFAULT_IMG_SIZE),
    y: p.random(p.height - DEFAULT_IMG_SIZE),
    vx: p.random(-5, 5),
    vy: p.random(-5, 5),
    size: pickRandomSize(),
    imgSrc: pickRandomImage(),
  });
  tiles.push(newTile);
  newTile.load();
};

const removeTile = () => {
  tiles.pop();
};

const rotateTiles = () => {
  tiles.forEach((tile) => {
    tile.rotateImage();
  });
};

const updateTilesSize = () => {
  const randomSize = pickRandomSize();
  tiles.forEach((t) => {
    t.size = randomSize;
  });
};

/*
  KEYBOARD HANDLER
*/
const handleKeyDown = (p, key) => {
  console.log("handleKeyDown", key);
  switch (key) {
    case "ArrowUp":
      addTile(p);
      break;
    case "ArrowDown":
      removeTile(p);
      break;
    case "ArrowLeft":
      updateTilesSize();
      break;
    case "ArrowRight":
      rotateTiles();
      break;
    case " ":
      showBg = !showBg;
      break;
    case "s":
      p.save(`${nSaves}.png`);
      ++nSaves;
      break;
    case "h":
      hasToRenderSketch = !hasToRenderSketch;
      break;
    case "b":
      backgroundIndex = pickRandomBgColor();
    default:
      break;
  }
};

/*
  P5JS SKETCH
*/
const sketch = (p) => {
  p.preload = () => {
    svg = p.loadSVG("tilect_icon.svg");
    console.log(svg);
  };

  p.setup = async () => {
    p.createCanvas(container.clientWidth, container.clientHeight).parent(
      container
    );
    // Initialize background
    p.background(pickRandomBgColor());

    // Initialize keyboard
    keyboard = new Keyboard({
      p,
      onKeyDown: (key) => handleKeyDown(p, key),
      onKeyUp: () => {},
    });
  };

  p.draw = () => {
    if (hasToRenderSketch) {
      // Render background
      if (showBg) {
        p.background(p.color(BG_COLORS[backgroundIndex]));
      }
      // Render tiles
      tiles.forEach((tile) => {
        tile.render();
      });
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(container.clientWidth, container.clientHeight);
  };
};

new p5(sketch);
