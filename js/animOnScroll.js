const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const hiddenElems = document.querySelectorAll(".animate_await")
hiddenElems.forEach((el) => observer.observe(el))