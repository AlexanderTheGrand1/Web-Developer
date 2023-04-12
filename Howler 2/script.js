// Initialize the paper.js canvas
paper.install(window);
paper.setup("key-area");

// Define an object containing mappings between keys and sound files
var sounds = {};

// Keep track of the last played sound
var lastSound;

// Define a function to load sound file for a key
function loadSound(key, src) {
  sounds[key] = new Howl({ src: [src] });
}

// Load sound files for all keys
loadSound("a", "sounds/bubbles.mp3");
loadSound("b", "sounds/clay.mp3");
loadSound("c", "sounds/confetti.mp3");
loadSound("d", "sounds/corona.mp3");
loadSound("e", "sounds/dotted-spiral.mp3");
loadSound("f", "sounds/flash-1.mp3");
loadSound("g", "sounds/flash-2.mp3");
loadSound("h", "sounds/flash-3.mp3");
loadSound("i", "sounds/glimmer.mp3");
loadSound("j", "sounds/moon.mp3");
loadSound("k", "sounds/pinwheel.mp3");
loadSound("l", "sounds/piston-1.mp3");
loadSound("m", "sounds/piston-2.mp3");
loadSound("n", "sounds/prism-1.mp3");
loadSound("o", "sounds/prism-2.mp3");
loadSound("p", "sounds/prism-3.mp3");
loadSound("q", "sounds/splits.mp3");
loadSound("r", "sounds/squiggle.mp3");
loadSound("s", "sounds/strike.mp3");
loadSound("t", "sounds/suspension.mp3");
loadSound("u", "sounds/timer.mp3");
loadSound("v", "sounds/ufo.mp3");
loadSound("w", "sounds/veil.mp3");
loadSound("x", "sounds/wipe.mp3");
loadSound("y", "sounds/zig-zag.mp3");
loadSound("z", "sounds/moon.mp3");

// Define a function to play a sound when a key is pressed
function playSound(event) {
  if (event.key in sounds) {
    // Stop the last played sound
    if (lastSound) {
      lastSound.stop();
    }

    // Generate a random point within the canvas to draw a circle
    var point = Point.random() * view.size;
    var circle = new Path.Circle(point, 150);
    circle.fillColor = new Color({
      hue: Math.random() * 360,
      saturation: 1,
      brightness: 1,
    });

    // Play the sound corresponding to the pressed key
    sounds[event.key].play();

    // Remove the circle after 1 second
    setTimeout(function () {
      circle.remove();
    }, 1000);

    // Update the last played sound
    lastSound = sounds[event.key];
  }
}

// Add an event listener to detect key presses and trigger playSound()
document.addEventListener("keydown", playSound);
