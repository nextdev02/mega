// Sticky Header

const header = document.querySelector("header")

window.addEventListener("scroll", function () {
  header.classList.toggle("scrolled", window.scrollY > 13);
  console.log(this.window.scrollY);

});

// Header For Mobile
const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', function () {
  console.log('Button clicked'); // Add this line
  dropdownMenu.classList.toggle('open');
});




