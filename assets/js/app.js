
// PRELOADING

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
});



// secion animation start

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
  
  // secion animation close






