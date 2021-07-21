const canvas = document.querySelector("#canvas");
const percent = document.querySelector(".percent");

const fullCircle = Math.PI * 2;
let completed = 0;
let val = 100;
// function promptInput() {
//   val = prompt("Enter percent value.");
//   val = parseInt(val);
//   if (val > 100 || val < 1) {
//     alert("Invalid input. Only 1 - 100 value is allowed");
//     promptInput();
//   }
// }
// promptInput();
let interval = setInterval(() => {
  completed++;
  if (completed <= val) {
    createCircle((completed / 100) * fullCircle);
  } else {
    clearInterval(interval);
    console.log("interval cleared");
  }
}, 30);

function createCircle(radian) {
  canvas.height = 230;
  canvas.width = 230;

  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(115, 115, 90, 0, Math.PI * 2, false);
  ctx.strokeStyle = "#090912";
  ctx.lineWidth = 30;
  ctx.stroke();

  ctx.beginPath();
  var gradient = ctx.createLinearGradient(0, 0, 230, 230);
  gradient.addColorStop(0, "#ff0000");
  gradient.addColorStop(0.5, "#ff7300");
  gradient.addColorStop(1, "#fff300");
  ctx.arc(115, 115, 90, 0, radian, false);
  ctx.strokeStyle = gradient;
  ctx.lineWidth = 30;
  ctx.stroke();
  percent.innerHTML = completed + "%";
}
