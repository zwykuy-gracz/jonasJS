const h1 = document.querySelector('h1');
const alertH1
// h1.addEventListener('mouseenter', function (e) {
//   alert('jap');
// });

h1.onmouseenter = function (e) {
  alert('jeb');
};


const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelectorAll('.nav__link').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
  });

const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);

// window.addEventListener('scroll', function (e) {
//   // console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.3) translateX(-1000px)';
// slider.style.overflow = 'visible';