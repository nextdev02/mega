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



//  HOme Bottom Slider

let boxes = new Swiper(".boxes", {
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {

    300: {
      slidesPerView: 2,
    },

    550: {
      slidesPerView: 3,
    },

    650: {
      slidesPerView: 3,
    },

    800: {
      slidesPerView: 4,
    },

    950: {
      slidesPerView: 4,
    },

    1050: {
      slidesPerView: 4,
    },

    1150: {
      slidesPerView: 5,
    },

    1250: {
      slidesPerView: 5.1,
    },


  },
});


// Service Up Section Slider

let serviceupswiperup = new Swiper(".service__list-up", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {

    300: {
      slidesPerView: 1.2,
    },

    550: {
      slidesPerView: 1.9,
    },

    650: {
      slidesPerView: 2.5,
    },

    800: {
      slidesPerView: 2.7,
    },

    950: {
      slidesPerView: 3,
    },

    1050: {
      slidesPerView: 4,
    },

    1150: {
      slidesPerView: 4,
    },

    1300: {
      slidesPerView: 4,
    },

  },
});

// Service Down Section Slider

let serviceupswiperdown = new Swiper(".service__list-down", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {

    300: {
      slidesPerView: 1.2,
    },

    550: {
      slidesPerView: 1.2,
    },

    650: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 2.7,
    },

    950: {
      slidesPerView: 3,
    },

    1050: {
      slidesPerView: 4,
    },

    1150: {
      slidesPerView: 4,
    },

    1300: {
      slidesPerView: 4,
    },

  },
});


// Team Member Slider

let teamcontent = new Swiper(".team__content", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {

    300: {
      slidesPerView: 1.2,
    },

    550: {
      slidesPerView: 1.1,
    },

    650: {
      slidesPerView: 1.4,
    },

    800: {
      slidesPerView: 1.2,
    },

    950: {
      slidesPerView: 2.3,
    },

    1050: {
      slidesPerView: 2.3,
    },

    1150: {
      slidesPerView: 3,
    },

    1300: {
      slidesPerView: 3.2
    },

  },
});



// Clients Section Slider

let clinets = new Swiper(".clients__brands", {
  slidesPerView: 6,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    clickable: true,
  },

  breakpoints: {

    300: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 2,
    },

    650: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 2.4,
    },

    950: {
      slidesPerView: 3.7,
    },

    1050: {
      slidesPerView: 3.6,
    },

    1150: {
      slidesPerView: 4,
    },

    1300: {
      slidesPerView: 5
    },

  },
});



// Process Section Slider

let process = new Swiper(".work__process", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    clickable: true,
  },

  breakpoints: {

    300: {
      slidesPerView: 1.3,
    },

    550: {
      slidesPerView: 1.3,
    },

    650: {
      slidesPerView: 1.8,
    },

    800: {
      slidesPerView: 2.5,
    },

    950: {
      slidesPerView: 3,
    },


    1050: {
      slidesPerView: 3.2,
    },


    1300: {
      slidesPerView: 3.5
    },

    1400: {
      slidesPerView: 4
    },

  },
});




