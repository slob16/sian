import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js'

const bg = Spheres2Background(document.getElementById('webgl-canvas'), {
  count: 200,
  colors: [0xff0000, 0x0, 0xffffff],
  minSize: 0.5,
  maxSize: 1
})

// Get references to the buttons
const button1 = document.getElementById('colors-btn');
const button2 = document.getElementById('home-btn'); // New button

// Handle background interaction
document.body.addEventListener('click', (ev) => {
  if (ev.target !== button1 && ev.target !== button2) {
    bg.togglePause(); // Avoid pausing when clicking buttons
  }
});

// Button 1: Change Colors
button1.addEventListener('click', () => {
  bg.spheres.setColors([0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()]);
  bg.spheres.light1.color.set(0xffffff * Math.random());
});

// Button 2: Go to Home Page
button2.addEventListener('click', () => {
  // Redirect to the home page
  window.location.href = 'home/dist/home.html'; // Update this path if your home page is different
});
