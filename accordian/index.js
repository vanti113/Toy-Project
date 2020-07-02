const btn = document.querySelectorAll(".bar");
const context = document.querySelectorAll(".context");

const SHOW = "show";
const HIDE = "hide";

function toggleToContext(id) {
  if (!context[id].classList.contains(SHOW)) {
    context[id].classList.add(SHOW);
    context[id].classList.remove(HIDE);
  } else {
    context[id].classList.add(HIDE);
    context[id].classList.remove(SHOW);
  }
}

function handleBars(event) {
  const btnId = event.target.id;
  // console.log(KEY[parseInt(btnId)]);
  const id = parseInt(btnId);
  toggleToContext(id);
}

function init() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", handleBars);
    btn[i].id = i;
  }
}
init();
