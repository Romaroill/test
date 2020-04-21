'use strict';

if (2 * 4 == 8) {
  console.log("It`s true !");
}

let num = 50;

if (num < 49) {
  console.log("No !");
} else if (num > 100) {
  console.log("To mutch !");
} else {
    console.log("Yes, it`s true !");
}

(num == 50) ? console.log("Yes !") : console.log("No !"); // тернарний оператор

switch (num) {
  case num < 49:
    console.log("No No No");
    break;
  case num > 100:
    console.log("To mutch !");
    break;
  case num > 80:
    console.log("To mutch too!");
    break;
  case 50:
    console.log("Bingo !");
    break;
  default:
    console.log("Yes. it`s a true!");
    break;
}
