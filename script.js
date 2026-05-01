// ANIMASI SCROLL
window.addEventListener("scroll", reveal);

function reveal() {
  let elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let visible = 100;

    if (elementTop < windowHeight - visible) {
      el.classList.add("active");
    }
  });
}

// TOMBOL SCROLL
function scrollToSection() {
  document.querySelector("#features").scrollIntoView({
    behavior: "smooth"
  });
}