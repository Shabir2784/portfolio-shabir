// Fade-in saat scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Hover efek link
const socialLinks = document.querySelectorAll(".social-link");
socialLinks.forEach(link => {
  link.addEventListener("mouseenter", () => link.classList.add("hovered"));
  link.addEventListener("mouseleave", () => link.classList.remove("hovered"));
});
