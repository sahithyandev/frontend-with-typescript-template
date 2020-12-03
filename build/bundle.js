// src/utl.ts
var log = (...message) => {
  console.log(...message);
};

// src/main.ts
var x = Math.random();
x++;
log(x);
log(document);
