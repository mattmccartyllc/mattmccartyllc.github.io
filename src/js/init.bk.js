window.addEventListener("beforeunload", function(event) {
  window.scrollTo(0, 0);
});

window.addEventListener('load', function () {
  sal();
  window.scrollTo(0, 0);

  const nav            = document.querySelector("aside");
  const navToggle      = document.querySelector("#nav-main-toggle");
  const navToggleUnsel = document.querySelector(".nav-main-toggle-unsel");
  const navToggleSel   = document.querySelector(".nav-main-toggle-sel");
  const intro          = document.querySelector("aside + section");
  const sections       = document.querySelectorAll("section");
  var   scrollY        = window.scrollY;

  nav.style.display  = 'none';
  nav.style.height   = 'calc(100vh - 47px)';
  intro.style.height = '100vh';
  navToggle.addEventListener('click', (event) => {
    if (nav.style.display == 'none') {
      scrollY                      = window.scrollY;
      navToggleUnsel.style.display = 'none';
      navToggleSel.style.display   = 'block';
      nav.style.display            = 'block';
      for(var i = 0; i < sections.length; i++){
        sections[i].style.display = 'none';
      }
      document.documentElement.style.overflow = 'hidden';
    } else {
      navToggleSel.style.display   = 'none';
      navToggleUnsel.style.display = 'block';
      nav.style.display            = 'none';
      for(var i = 0; i < sections.length; i++){
        sections[i].style.display = 'flex';
      }
      document.documentElement.style.overflow = 'auto';
      window.scrollTo(0, scrollY);
    }
  });
});