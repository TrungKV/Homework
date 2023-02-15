let turnon = document.querySelector(".turnon");
let turnoff = document.querySelector(".turnoff");

// console.log(turnon);
// turnon.addEventListener("click", function () {
//   let img_turnon = (document.querySelector(".img_anh").src =
//     "./img/pic_bulbon.gif");
// });
// turnoff.addEventListener("click", function () {
//   let img_turnon = (document.querySelector(".img_anh").src =
//     "./img/pic_bulboff.gif");
// });
function turnon1() {
  let img_turnon = (document.querySelector(".img_anh").src =
    "./img/pic_bulbon.gif");
}
function turnoff1() {
  let img_turnoff = (document.querySelector(".img_anh").src =
    "./img/pic_bulboff.gif");
}
turnon.addEventListener("click", turnon1);
turnoff.addEventListener("click", turnoff1);

// BT2

let CDK = document.querySelector(".chua_DK");
let DaDK = document.querySelector(".Da_DK");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  CDK.classList.add("close");
  DaDK.classList.add("open");
});

// BT3
let x = document.querySelector(".username");
let y = document.querySelector(".pass");
let btnb3 = document.querySelector(".btn_BT3");
function check() {
  if (x.value === "admin" && y.value === "admin123") {
    alert("ban đã đăng nhập thành công");
  } else {
    alert("đăng nhập thất bại, yêu cầu đăng nhập lại");
  }
}
btnb3.addEventListener("click", check);
// Bài 4
let x4 = document.querySelector(".bill_input");
let y4 = document.querySelector(".Tip_input");
let z4 = document.querySelector(".people_number");
let e4 = document.querySelector(".money_one");
let caculation = document.querySelector(".caculation");

let money4 = 0;
function money_share() {
  money4 = (Number(x4.value) + Number(y4.value)) / Number(z4.value);
  if (x4.value == "" || y4.value == "" || z4.value == "") {
    e4.innerText = "Vui lòng đầy đủ thông tin các trường";
  } else {
    e4.innerText = `$ ${money4}`;
  }
  return money4;
}

caculation.addEventListener("click", money_share);
