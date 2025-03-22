const createObserver = (threshold, className) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold });

  document.querySelectorAll(`.${className}`).forEach((el) => observer.observe(el));
};

createObserver(0.65, "animate_await");
createObserver(0.2, "animate_fast");