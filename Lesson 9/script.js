//Bài 2 Xác định só tự nhiên n có phải là số nguyên tố hay không

function SNT(n) {
  if (n < 2) {
    console.log("n khong là so nguyen to");
    return n;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log("N khong phai la so nguyen to");
      return false;
    }
  }
  console.log("n la so nguyen to ");
  return true;
}
SNT(8);

//Bài 3 :Tính tổng các ước của một số.
let sum = 0;
function uoc(a) {
  for (let i = 0; i <= a; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }
  console.log(`Tổng của phép tính trên là ${sum}`);
  return sum;
}
uoc(7);
// let x = 3;
function SCP(x) {
  for (let j = 0; j <= x; j++) {
    if (x === j * j) {
      return true;
    }
  }
  return false;
}
let a = 16;

if (SCP(a)) {
  console.log(`${a}  La so chinh phuong`);
} else {
  console.log(`${a} Khong la so chinh phuong`);
}
