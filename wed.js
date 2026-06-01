/*const sections = document.querySelectorAll("section, .calendar-section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

sections.forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});/*