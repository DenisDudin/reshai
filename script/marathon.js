document.querySelectorAll(".lesson").forEach((lesson) => {
  lesson.addEventListener("click", (e) => {
    lesson.querySelector(".lesson__text").classList.toggle("show-lesson");
  });
});
