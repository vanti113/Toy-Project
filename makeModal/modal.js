const insideBody = document.querySelector(".inside"),
  closeBtn = insideBody.querySelector(".modal-btn");
const openBtn = document.querySelector(".btn");
const showModal = "showModal",
  closeModal = "closeModal";

function closeOptions(event) {
  const className = event.target.className;
  if (className === "inside") {
    insideBody.classList.add(closeModal);
  }
}

function windowHandler(event) {
  /* if (insideBody.classList.contains(closeModal)) {
    // insideBody.classList.remove(closeModal);
    // insideBody.classList.add(showModal);
    insideBody.classList.replace(closeModal, showModal);
  } else {
    // insideBody.classList.remove(showModal);
    // insideBody.classList.add(closeModal);
    insideBody.classList.replace(showModal, closeModal);
  } */
  insideBody.classList.toggle(closeModal);
}

function init() {
  openBtn.addEventListener("click", windowHandler);
  closeBtn.addEventListener("click", windowHandler);
  insideBody.addEventListener("click", closeOptions);
}
init();
