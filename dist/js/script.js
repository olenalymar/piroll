// burger button

const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');

let showNav = false;

navBtn.addEventListener('click', toggleNav);

function toggleNav() {
  if (!showNav) {
    navBtn.classList.add('hide');
    nav.classList.add('show');
    showNav = true;
  } else {
    navBtn.classList.remove('hide');
    nav.classList.remove('show');
    showNav = false;
  }
}

//scroll navigation

const navLinks = document.querySelectorAll('.nav a');

for (let navLink of navLinks) {
  navLink.addEventListener('click', e => {
    let hashval = navLink.getAttribute('href');
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    history.pushState(null, null, hashval);
    e.preventDefault();
  });
}

// testimonials slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('testimonials-item');
  const dots = document.getElementsByClassName('testimonials__dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
