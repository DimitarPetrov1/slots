import "./styles.css";
import generateColumn from "./generateColumn";

let BALANCE = 100;

// Generate columns
const COL1 = document.getElementById("col1");
const COL2 = document.getElementById("col2");
const COL3 = document.getElementById("col3");

COL1.innerHTML = [12, 3, 4, 6, 7, 8, 5, 6, 7];
COL2.innerHTML = [12, 3, 4, 6, 7, 8, 5, 6, 7];
COL3.innerHTML = [12, 3, 4, 6, 7, 8, 5, 6, 7];

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
    if (i === 1) {
      return `<img src='img/apple.png' alt=''>`;
    } else {
      return null;
    }
    // return i;
  })}`;
  COL2.innerHTML = `${generateColumn().map((i) => {
    // if (i === 1) {
    //   return `<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' width='10px' height='10px' alt=''>`;
    // } else {
    //   return null;
    // }
    return i;
  })}`;
  COL3.innerHTML = `${generateColumn().map((i) => {
    // if (i === 1) {
    //   return `<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' width='10px' height='10px' alt=''>`;
    // } else {
    //   return null;
    // }
    return i;
  })}`;
  // Since there are commas the index is incramented + 1
  let R1C1 = COL1.textContent[COL1.textContent.length - 1];
  let R1C2 = COL2.textContent[COL2.textContent.length - 1];
  let R1C3 = COL3.textContent[COL3.textContent.length - 1];
  let R2C1 = COL1.textContent[COL1.textContent.length - 3];
  let R2C2 = COL2.textContent[COL2.textContent.length - 3];
  let R2C3 = COL3.textContent[COL3.textContent.length - 3];
  let R3C1 = COL1.textContent[COL1.textContent.length - 5];
  let R3C2 = COL2.textContent[COL2.textContent.length - 5];
  let R3C3 = COL3.textContent[COL3.textContent.length - 5];
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
