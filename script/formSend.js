const form = document.getElementById("form");
form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();

  let formData = new FormData(form);
  let response = await fetch("/tomail.php", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    form.reset();
  } else {
    alert("Произошла ошибка");
  }
}
