// src/utl.ts
var log = (...message) => {
  console.log(...message);
};

// src/main.ts
function sayHi() {
  log("hi there?!");
}
sayHi();
document.body.onload = () => {
  let i = 0;
  setInterval(() => {
    i++;
    document.querySelector(".counter--seconds").innerHTML = i.toString();
  }, 1e3);
};
