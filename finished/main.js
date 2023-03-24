document.querySelectorAll(".book").forEach((book) => {
  book.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#popup-title").innerHTML = book.dataset.title;
    document.querySelector("#popup-author").innerHTML = book.dataset.author;
    document.querySelector(
      "#popup-published"
    ).innerHTML = `Published in ${book.dataset.published}`;
    document.querySelector("#popup-book-image").src =
      book.querySelector("img").src;
    document.querySelector("#popup-link").href = book.dataset.link;

    document.querySelector(".popup-wrapper").style.display = "flex";
  });
});

document.querySelector(".popup-wrapper").addEventListener("click", (e) => {
  if (e.target.classList.contains("popup-wrapper")) {
    document.querySelector(".popup-wrapper").style.display = "none";
  }
});
