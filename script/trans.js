const links = document.querySelectorAll('a[href="/pages/select.html"]');

links.forEach((link) => {
  link.addEventListener("click", () => {
    localStorage.setItem("select", link.getAttribute("data-select"));
  });
});
