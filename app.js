const util = {
  mobileMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('nav-visible');
  },
  windowResize() {
    const nav = document.getElementById('nav');
    if (window.innerWidth > 800) {
      nav.classList.remove('nav-visible');
    }
  },
  scrollEvent() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const scrollMenuIds = Array.from(document.querySelectorAll('a.nav-link[href]'));

    scrollMenuIds.forEach(link => {
      const container = document.querySelector(link.getAttribute('href'));
      if (container) {
        const containerOffset = container.offsetTop;
        const containerHeight = container.offsetHeight;

        if (scrollPosition >= containerOffset - 20 && scrollPosition < containerOffset + containerHeight - 20) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  util.scrollMenuIds = Array.from(document.querySelectorAll('a.nav-link[href]'));
  document.getElementById('menu').addEventListener('click', util.mobileMenu);
  window.addEventListener('resize', util.windowResize);
  document.addEventListener('scroll', util.scrollEvent);
});
