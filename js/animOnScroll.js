const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated")
    }
  })
})

const hiddenElems = document.querySelectorAll(".animate_await")
hiddenElems.forEach((el) => observer.observe(el))