/* =========================================================
   BIGGIE WOODWORKS
   Main JavaScript
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (menuToggle && mobileNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mobileNav.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });


  // Close menu when a link is clicked

  mobileNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mobileNav.classList.remove("open");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


  // Close menu when clicking outside

  document.addEventListener("click", event => {

    if (
      !mobileNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {

      mobileNav.classList.remove("open");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN RESIZING
   ========================================================= */

window.addEventListener("resize", () => {

  if (window.innerWidth > 760 && mobileNav && menuToggle) {

    mobileNav.classList.remove("open");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  }

});


/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {

  const revealObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {

    revealObserver.observe(element);

  });

}


/* =========================================================
   GALLERY LIGHTBOX
   ========================================================= */

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxCaption = document.querySelector(".lightbox p
