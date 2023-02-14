let turnon = document.querySelector(".turnon");
let turnoff = document.querySelector(".turnoff");

console.log(turnon);
turnon.addEventListener("click", function () {
  let img_turnon = (document.querySelector(".img_anh").src =
    "./img/pic_bulbon.gif");
});
turnoff.addEventListener("click", function () {
  let img_turnon = (document.querySelector(".img_anh").src =
    "./img/pic_bulboff.gif");
});

// BT2

let CDK = document.querySelector(".chua_DK");
let DaDK = document.querySelector(".Da_DK");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  CDK.classList.add("close");
  DaDK.classList.add("open");
});
