import "./styles.css";
import generateColumn from "./generateColumn";
import {
  apple,
  cherry,
  grapes,
  lemon,
  orange,
  plum,
  watermelon,
  seven
} from "./data";

let BALANCE = 100;

// Generate columns
const COL1 = document.getElementById("col1");
const COL2 = document.getElementById("col2");
const COL3 = document.getElementById("col3");

// Show balance
const targetBalance = document.getElementById("score");
targetBalance.textContent = BALANCE + "lv.";
// Play button
const playButton = document.getElementById("play");
playButton.addEventListener("click", () => {
  winningCombinations();
});

//
function winningCombinations() {
  // Check if last 3 numbers in the columns match
  COL1.innerHTML = `${generateColumn().map((i) => {
    if (i === 0) {
      return `<img src='${apple}' alt='${i}'>`;
    } else if (i === 1) {
      return `<img src='${cherry}' alt='${i}'>`;
    } else if (i === 2) {
      return `<img src='${grapes}' alt='${i}'>`;
    } else if (i === 3) {
      return `<img src='${lemon}' alt='${i}'>`;
    } else if (i === 4) {
      return `<img src='${orange}' alt='${i}'>`;
    } else if (i === 5) {
      return `<img src='${plum}' alt='${i}'>`;
    } else if (i === 6) {
      return `<img src='${watermelon}' alt='${i}'>`;
    } else if (i === 7) {
      return `<img src='${seven}' alt='${i}'>`;
    } else {
      return i;
    }
  })}`;
  COL2.innerHTML = `${generateColumn().map((i) => {
    if (i === 0) {
      return `<img src='${apple}' alt='${i}'>`;
    } else if (i === 1) {
      return `<img src='${cherry}' alt='${i}'>`;
    } else if (i === 2) {
      return `<img src='${grapes}' alt='${i}'>`;
    } else if (i === 3) {
      return `<img src='${lemon}' alt='${i}'>`;
    } else if (i === 4) {
      return `<img src='${orange}' alt='${i}'>`;
    } else if (i === 5) {
      return `<img src='${plum}' alt='${i}'>`;
    } else if (i === 6) {
      return `<img src='${watermelon}' alt='${i}'>`;
    } else if (i === 7) {
      return `<img src='${seven}' alt='${i}'>`;
    } else {
      return i;
    }
  })}`;
  COL3.innerHTML = `${generateColumn().map((i) => {
    if (i === 0) {
      return `<img src='${apple}' alt='${i}'>`;
    } else if (i === 1) {
      return `<img src='${cherry}' alt='${i}'>`;
    } else if (i === 2) {
      return `<img src='${grapes}' alt='${i}'>`;
    } else if (i === 3) {
      return `<img src='${lemon}' alt='${i}'>`;
    } else if (i === 4) {
      return `<img src='${orange}' alt='${i}'>`;
    } else if (i === 5) {
      return `<img src='${plum}' alt='${i}'>`;
    } else if (i === 6) {
      return `<img src='${watermelon}' alt='${i}'>`;
    } else if (i === 7) {
      return `<img src='${seven}' alt='${i}'>`;
    } else {
      return i;
    }
  })}`;
  // Since there are commas the index is incramented + 1
  let R1C1 = COL1.children[0].getAttribute("alt");
  let R1C2 = COL2.children[0].getAttribute("alt");
  let R1C3 = COL3.children[0].getAttribute("alt");
  let R2C1 = COL1.children[1].getAttribute("alt");
  let R2C2 = COL2.children[1].getAttribute("alt");
  let R2C3 = COL3.children[1].getAttribute("alt");
  let R3C1 = COL1.children[2].getAttribute("alt");
  let R3C2 = COL2.children[2].getAttribute("alt");
  let R3C3 = COL3.children[2].getAttribute("alt");

  // Starting with dec the balance
  BALANCE--;
  // rows
  if (R1C1 === R1C2 && R1C2 === R1C3) {
    console.log("first row wins");
    BALANCE++;
  }
  if (R2C1 === R2C2 && R2C2 === R2C3) {
    console.log("second row wins");
    BALANCE++;
  }
  if (R3C1 === R3C2 && R3C2 === R3C3) {
    console.log("third row wins");
    BALANCE++;
  }
  // // X shape
  if (R1C1 === R2C2 && R2C2 === R3C3) {
    console.log("/ reversed ");
    BALANCE++;
  }
  if (R1C3 === R2C2 && R2C2 === R3C1) {
    console.log("/");
    BALANCE++;
  }
  // ^ and v shape
  if (R1C1 === R2C2 && R2C2 === R1C3) {
    console.log("V");
    BALANCE++;
  }
  if (R3C1 === R2C2 && R2C2 === R3C3) {
    console.log("^");
    BALANCE++;
  }

  targetBalance.textContent = BALANCE.toFixed(2) + "lv.";
}
