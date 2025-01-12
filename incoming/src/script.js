import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js'

const bg = Spheres2Background(document.getElementById('webgl-canvas'), {
  count: 200,
  colors: [0xff0000, 0x0, 0xffffff],
  minSize: 0.5,
  maxSize: 1
})

// Get references to the buttons
const button1 = document.getElementById('colors-btn');
const button2 = document.getElementById('home-btn');

// Add a click listener to button1
button1.addEventListener('click', () => {
  // Toggle the active state
  button1.classList.add('active');
  button2.classList.remove('active');

  // Change colors functionality
  bg.spheres.setColors([0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()]);
  bg.spheres.light1.color.set(0xffffff * Math.random());
});

// Add a click listener to button2
button2.addEventListener('click', () => {
  // Toggle the active state
  button2.classList.add('active');
  button1.classList.remove('active');

  // Redirect to home page
  window.location.href = 'home/dist/home.html';
});
