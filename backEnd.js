// JavaScript to toggle the navbar items
const hamburger = document.getElementById('hamburger');
const navbarItems = document.getElementById('navbar-items');

hamburger.addEventListener('click', () => {
  navbarItems.classList.toggle('active');
});