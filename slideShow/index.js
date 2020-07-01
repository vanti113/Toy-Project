const leftBtn = document.querySelector(".leftBtn"),
  rightBtn = document.querySelector(".rightBtn");
const roundBtn = document.querySelectorAll(".roundBtn");
const slidePic = document.querySelectorAll(".pic"),
  count = document.querySelector(".counterNum");

const SHOW = "show";
const HIDE = "hide";

let stack = 1;
const insertCount = () => (count.innerText = stack.toString());

function paintToSlide(id) {
  slidePic.forEach((i) => {
    const picId = parseInt(i.id);
    if (picId === id) {
      i.classList.add(SHOW);
      i.classList.remove(HIDE);
    } else {
      i.classList.remove(SHOW);
      i.classList.add(HIDE);
    }
  });
  insertCount();
}

function removeStack() {
  stack--;
  if (stack < 1) {
    stack = 4;
  }
  console.log(stack);
  paintToSlide(stack);
}
function addStack() {
  stack++;
  if (stack > 4) {
    stack = 1;
  }
  console.log(stack);
  paintToSlide(stack);
}

function callToPic(event) {
  const id = event.target.id;
  switch (id) {
    case "round1":
      paintToSlide(1);
      stack = 1;
      break;
    case "round2":
      paintToSlide(2);
      stack = 2;
      break;
    case "round3":
      paintToSlide(3);
      stack = 3;
      break;
    case "round4":
      paintToSlide(4);
      stack = 4;
      break;
  }
  insertCount();
}

function init() {
  leftBtn.addEventListener("click", removeStack);
  rightBtn.addEventListener("click", addStack);
  for (let i = 0; i < roundBtn.length; i++) {
    roundBtn[i].addEventListener("click", callToPic);
  }
  insertCount();
}
init();
