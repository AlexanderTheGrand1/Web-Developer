// Initialize Paper.js canvas
paper.install(window);

// Define the keyData object, which maps each letter to a sound and a circle color
var keyData = {
  a: {
    sound: new Howl({
      src: ['sounds/bubbles.mp3']
    }),
    color: '#1abc9c'
  },
  b: {
    sound: new Howl({
      src: ['sounds/clay.mp3']
    }),
    color: '#2ecc71'
  },
  c: {
    sound: new Howl({
      src: ['sounds/confetti.mp3']
    }),
    color: '#3498db'
  },
  // add more key data here...
};

// Define the onKeyDown function
function onKeyDown(event) {
  if (keyData[event.key]) {
    // Create a circle at a random point on the canvas
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(point, 300);
    newCircle.fillColor = keyData[event.key].color;
    // Play the sound associated with the key
    keyData[event.key].sound.play();
    // Animate the circle using Paper.js
    var destination = new Point(view.size.width / 2, view.size.height / 2);
    newCircle.tweenTo({
      position: destination,
      opacity: 0,
      onUpdate: function(event) {
        // Update the circle's fill color to a gradient between its original color and white
        var gradient = new Gradient([newCircle.fillColor, 'white']);
        newCircle.fillColor = new Color(gradient, null, null, null, newCircle.fillColor.gray);
      }
    }, 1000);
  }
}

// Bind the onKeyDown function to the window object
window.addEventListener('keydown', onKeyDown);