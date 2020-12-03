import { log } from "./utl";

function sayHi() {
  log("hi there?!");
}

sayHi();

let i = 0;
document.body.onload = () => {
  setInterval(() => {
    i++;
    document.querySelector(".counter--seconds").innerHTML = i.toString();
  }, 1000);
};
