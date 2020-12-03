// src/utl.ts
var log = (...message) => {
  console.log(...message);
};

// src/main.ts
function sayHi() {
  log("hi there?!");
}
sayHi();
var i = 0;
document.body.onload = () => {
  setInterval(() => {
    i++;
    document.querySelector(".counter--seconds").innerHTML = i.toString();
  }, 1e3);
};
