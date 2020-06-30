const buttons = document.querySelectorAll(".button");
const tables = document.querySelectorAll(".content");

const SHOW = "show";
const NONE = "none";
// const active = "#4caf50";
// const deactive = "#555555";
const active = "active";
const deactive = "deactive";

function paintToButton(id) {
  buttons.forEach((i) => {
    if (i.id === id) {
      // i.style.backgroundColor = active;
      i.classList.remove(deactive);
      i.classList.add(active);
    } else {
      // i.style.backgroundColor = deactive;
      i.classList.remove(active);
      i.classList.add(deactive);
    }
  });
}

function clearToClass() {
  tables.forEach((i) => {
    i.classList.add(NONE);
  });
}

function callToTable(event) {
  const targetId = event.target.id;
  paintToButton(targetId);
  clearToClass();
  tables.forEach((i) => {
    if (i.id === targetId) {
      i.classList.remove(NONE);
      i.classList.add(SHOW);
    } else {
      i.classList.remove(SHOW);
    }
  });
}

function init() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", callToTable);
  }
}
init();
