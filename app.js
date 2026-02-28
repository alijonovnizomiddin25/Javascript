let U1 = 4;
console.log("UY1:", U1 % 2 === 0);

let U2A = -1, U2B = -3;
console.log("UY2:", U2A >= 0 || U2B < -2);

let U3A = 1, U3B = 3, U3C = 5;
console.log("UY3:",
  (U3B > U3A && U3B < U3C) ||
  (U3B > U3C && U3B < U3A)
);

let U4A = 3, U4B = 5;
console.log("UY4:", U4A % 2 !== 0 && U4B % 2 !== 0);

let U5A = 2, U5B = 3;
console.log("UY5:", U5A % 2 !== 0 || U5B % 2 !== 0);

let U6A = 2, U6B = 3;
console.log("UY6:",
  (U6A % 2 !== 0 && U6B % 2 === 0) ||
  (U6A % 2 === 0 && U6B % 2 !== 0)
);

let U7A = 1, U7B = 2, U7C = 3;
console.log("UY7:", U7A > 0 && U7B > 0 && U7C > 0);

let U8A = -1, U8B = 2, U8C = -3;
console.log("UY8:",
  (U8A > 0 && U8B <= 0 && U8C <= 0) ||
  (U8B > 0 && U8A <= 0 && U8C <= 0) ||
  (U8C > 0 && U8A <= 0 && U8B <= 0)
);

let U9A = 1, U9B = 2, U9C = -3;
let count = 0;
if (U9A > 0) count++;
if (U9B > 0) count++;
if (U9C > 0) count++;
console.log("UY9:", count === 2);

let U10 = 24;
console.log("UY10:", U10 >= 10 && U10 <= 99 && U10 % 2 === 0);

let U11 = 135;
console.log("UY11:", U11 >= 100 && U11 <= 999 && U11 % 2 !== 0);

let U12A = 3, U12B = -3, U12C = 5;
console.log("UY12:",
  U12A === -U12B ||
  U12A === -U12C ||
  U12B === -U12C
);

let U13 = 123;
let a13 = Math.floor(U13 / 100);
let b13 = Math.floor((U13 % 100) / 10);
let c13 = U13 % 10;
console.log("UY13:", a13 < b13 && b13 < c13);

let U14 = 321;
let a14 = Math.floor(U14 / 100);
let b14 = Math.floor((U14 % 100) / 10);
let c14 = U14 % 10;
console.log("UY14:",
  (a14 < b14 && b14 < c14) ||
  (a14 > b14 && b14 > c14)
);

let U15 = 121;
let a15 = Math.floor(U15 / 100);
let c15 = U15 % 10;
console.log("UY15:", a15 === c15);