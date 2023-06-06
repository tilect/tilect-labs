```
# NIFTY TILES 001: Keyboard

This code is an animation sketch using the p5.js library and SVG images. It renders tiles on a canvas and allows you to interact with them using keyboard inputs. The sketch supports features like adding and removing tiles, changing tile sizes, rotating tiles, changing background colors, saving images, and toggling the visibility of the background.

This is the P5js sketch code we used as basis to develop NIFTY TILES 001 experience 

## Prerequisites

Before running this code, make sure you have the following installed:

- [p5.js](https://p5js.org/) library
- [p5.js-svg](https://github.com/zenozeng/p5.js-svg) library

## Installation

1. Clone the repository or download the source code.
2. Install the required libraries:

   ```shell
   npm install p5
   npm install p5.js-svg
   ```

3. Place the `style.css` file in the same directory as the code file.
4. Adjust the constants in the code according to your needs. You can change the following:

   - `IMAGES`: An array of SVG image paths.
   - `BG_COLORS`: An array of background colors in hexadecimal format.
   - `DEFAULT_IMG_SIZE`: The default size of the tiles.
   - `SIZES`: An array of sizes for the tiles.

## Usage

1. Include the required CSS file in your HTML:

   ```html
   <link rel="stylesheet" type="text/css" href="style.css">
   ```

2. Add a container element in your HTML where the canvas will be rendered:

   ```html
   <div id="p5-canvas"></div>
   ```

3. Include the p5.js library and the code file in your HTML:

   ```html
   <script src="p5.js"></script>
   <script src="p5.js-svg.js"></script>
   <script src="your-code.js"></script>
   ```

4. Run the code and interact with the animation using the following keyboard inputs:

   - ArrowUp: Add a new tile.
   - ArrowDown: Remove the last tile.
   - ArrowLeft: Update the size of all tiles.
   - ArrowRight: Rotate all tiles.
   - Space: Toggle the visibility of the background.
   - "s": Save the current canvas as an image (saves as a PNG).
   - "h": Toggle rendering of the sketch.
   - "b": Change the background color.

## Customization

You can customize the behavior of the animation by modifying the following parts of the code:

- Change the `IMAGES` array to include your own SVG image paths.
- Modify the `BG_COLORS` array to use different background colors.
- Adjust the `DEFAULT_IMG_SIZE` constant to change the default size of the tiles.
- Update the `SIZES` array to include your preferred tile sizes.
- Modify the keyboard inputs in the `handleKeyDown` function to add or change the actions triggered by specific keys.

Feel free to experiment and make the animation suit your needs!

## License

This code is licensed under the [MIT License](https://opensource.org/licenses/MIT).
```
