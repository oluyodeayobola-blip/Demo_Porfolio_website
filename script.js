document.addEventListener("DOMContentLoaded", () => {

  // SIMPLE FADE ANIMATION
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

  // BUTTON INTERACTION
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.transition = "0.3s";
    });
  });

  // CUSTOM CURSOR
  const cursor = document.querySelector(".cursor");

  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }

  // CURSOR HOVER EFFECT
  const hoverItems = document.querySelectorAll("a, button");

  hoverItems.forEach(item => {

    item.addEventListener("mouseenter", () => {
      if (cursor) {
        cursor.style.width = "60px";
        cursor.style.height = "60px";
        cursor.style.background = "rgba(255,79,123,0.15)";
      }
    });

    item.addEventListener("mouseleave", () => {
      if (cursor) {
        cursor.style.width = "22px";
        cursor.style.height = "22px";
        cursor.style.background = "transparent";
      }
    });

  });

  // LENIS
  if (typeof Lenis !== "undefined") {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  // SCROLL PROGRESS
  window.addEventListener("scroll", () => {

    const scrollTop =
      document.documentElement.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent =
      (scrollTop / scrollHeight) * 100;

    const progress =
      document.querySelector(".scroll-progress");

    if (progress) {
      progress.style.width = scrollPercent + "%";
    }

  });

  // MAGNETIC BUTTONS
  const magneticButtons =
    document.querySelectorAll("button");

  magneticButtons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

      const rect =
        button.getBoundingClientRect();

      const x =
        e.clientX - rect.left - rect.width / 2;

      const y =
        e.clientY - rect.top - rect.height / 2;

      button.style.transform =
        `translate(${x * 0.2}px, ${y * 0.2}px)`;

    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translate(0px,0px)";
    });

  });

  // MOBILE MENU
  const menuToggle =
    document.querySelector(".menu-toggle");

  const mobileNav =
    document.querySelector(".mobile-nav");

  if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {

      mobileNav.classList.toggle("active");
      menuToggle.classList.toggle("open");

    });

  }

});

// PAGE LOADER
window.addEventListener("load", () => {

  const loader =
    document.querySelector(".page-loader");

  if (loader) {

    setTimeout(() => {

      loader.classList.add("hide");

    }, 1200);

  }

});

// CARD GLOW EFFECT
const glowCards =
  document.querySelectorAll(
    ".service-card, .project-card, .blog-card"
  );

glowCards.forEach(card => {

  card.addEventListener("mousemove", e => {

    const rect =
      card.getBoundingClientRect();

    card.style.setProperty(
      "--x",
      `${e.clientX - rect.left}px`
    );

    card.style.setProperty(
      "--y",
      `${e.clientY - rect.top}px`
    );

  });

});

// MOUSE GLOW
const glow =
  document.querySelector(".mouse-glow");

document.addEventListener("mousemove", e => {

  if (glow) {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

  }

});