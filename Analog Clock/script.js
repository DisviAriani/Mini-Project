let hr = document.getElementById("h");
let mn = document.getElementById("m");
let sc = document.getElementById("s");

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hrotation = 30 * hh + mm / 2;
  let mrotation = 6 * mm;
  let srotation = 6 * ss;

  hr.style.transform = `rotate(${hrotation}deg)`;
  mn.style.transform = `rotate(${mrotation}deg)`;
  sc.style.transform = `rotate(${srotation}deg)`;
}
setInterval(displayTime, 1000);
