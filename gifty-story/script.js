const elements = document.querySelectorAll(".scroll-animate");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
