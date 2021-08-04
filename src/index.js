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
import {
  COL1,
  COL2,
  COL3,
  multiplierGroupOne,
  multiplierGroupTwo,
  multiplierSeven
} from "./vars";

let currentBet = 1;
let BALANCE = 100;
let delay = 1900;

// Generate columns

COL1.innerHTML = `
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>`;
COL2.innerHTML = `
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>`;
COL3.innerHTML = `
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>
<img src='${seven}' alt='${7}'>`;

// Show balance + bet
const targetBalance = document.getElementById("balance");
targetBalance.textContent = BALANCE;
const betDisplay = document.getElementById("bet");
betDisplay.textContent = currentBet;
const wonDisplay = document.getElementById("won");
// buttons

const playButton = document.getElementById("play");
playButton.addEventListener("click", () => {
  if (currentBet > BALANCE) {
    return;
  }
  playButton.disabled = true;
  lowerBet.disabled = true;
  raiseBet.disabled = true;
  animate();
  winningCombinations();
});
const lowerBet = document.getElementById("lowerBet");
const raiseBet = document.getElementById("raiseBet");
lowerBet.addEventListener("click", () => {
  if (currentBet <= 1) {
    return;
  }
  currentBet--;
  betDisplay.textContent = currentBet;
});
raiseBet.addEventListener("click", () => {
  currentBet++;
  betDisplay.textContent = currentBet;
});

// animate
function animate() {
  COL1.classList.add("spin-start");
  COL2.classList.add("spin-start");
  COL3.classList.add("spin-start");

  setTimeout(() => {
    COL1.classList.remove("spin-start");
    COL2.classList.remove("spin-start");
    COL3.classList.remove("spin-start");
  }, delay);
}
//
function winningCombinations() {
  let wonAmount = 0;

  // Check if last 3 numbers in the columns match
  COL1.innerHTML = `${generateColumn().map((i) => {
    if (i === 0) {
      return `<img src='${lemon}' alt='${i}'>`;
    } else if (i === 1) {
      return `<img src='${orange}' alt='${i}'>`;
    } else if (i === 2) {
      return `<img src='${cherry}' alt='${i}'>`;
    } else if (i === 3) {
      return `<img src='${apple}' alt='${i}'>`;
    } else if (i === 4) {
      return `<img src='${plum}' alt='${i}'>`;
    } else if (i === 5) {
      return `<img src='${watermelon}' alt='${i}'>`;
    } else if (i === 6) {
      return `<img src='${grapes}' alt='${i}'>`;
    } else if (i === 7) {
      return `<img src='${seven}' alt='${i}'>`;
    } else {
      return i;
    }
  })}`;
  COL2.innerHTML = `${generateColumn().map((i) => {
    if (i === 0) {
      return `<img src='${lemon}' alt='${i}'>`;
    } else if (i === 1) {
      return `<img src='${orange}' alt='${i}'>`;
    } else if (i === 2) {
      return `<img src='${cherry}' alt='${i}'>`;
    } else if (i === 3) {
      return `<img src='${apple}' alt='${i}'>`;
    } else if (i === 4) {
      return `<img src='${plum}' alt='${i}'>`;
    } else if (i === 5) {
      return `<img src='${watermelon}' alt='${i}'>`;
    } else if (i === 6) {
      return `<img src='${grapes}' alt='${i}'>`;
    } else if (i === 7) {
      return `<img src='${seven}' alt='${i}'>`;
    } else {
      return i;
    }
  })}`;
  COL3.innerHTML = `${generateColumn().map((i) => {
    if (i === 0) {
      return `<img src='${lemon}' alt='${i}'>`;
    } else if (i === 1) {
      return `<img src='${orange}' alt='${i}'>`;
    } else if (i === 2) {
      return `<img src='${cherry}' alt='${i}'>`;
    } else if (i === 3) {
      return `<img src='${apple}' alt='${i}'>`;
    } else if (i === 4) {
      return `<img src='${plum}' alt='${i}'>`;
    } else if (i === 5) {
      return `<img src='${watermelon}' alt='${i}'>`;
    } else if (i === 6) {
      return `<img src='${grapes}' alt='${i}'>`;
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

  let R1C1i = COL1.children[0];
  let R1C2i = COL2.children[0];
  let R1C3i = COL3.children[0];
  let R2C1i = COL1.children[1];
  let R2C2i = COL2.children[1];
  let R2C3i = COL3.children[1];
  let R3C1i = COL1.children[2];
  let R3C2i = COL2.children[2];
  let R3C3i = COL3.children[2];

  // Starting with dec the balance
  BALANCE -= currentBet;
  targetBalance.textContent = BALANCE;
  // rows

  if (R1C1 === R1C2 && R1C2 === R1C3) {
    let result = Number(R1C1);

    if (result <= 4) {
      BALANCE += currentBet * multiplierGroupOne;
      wonAmount += currentBet * multiplierGroupOne;
    }
    if (result === 5 || result === 6) {
      BALANCE += currentBet * multiplierGroupTwo;
      wonAmount += currentBet * multiplierGroupTwo;
    }
    if (result === 7) {
      BALANCE += currentBet * multiplierSeven;
      wonAmount += currentBet * multiplierSeven;
    }
    setTimeout(() => {
      R1C1i.classList.add("winning-img");
      R1C2i.classList.add("winning-img");
      R1C3i.classList.add("winning-img");
    }, delay);
  }
  if (R2C1 === R2C2 && R2C2 === R2C3) {
    let result = Number(R2C1);
    if (result <= 4) {
      BALANCE += currentBet * multiplierGroupOne;
      wonAmount += currentBet * multiplierGroupOne;
    } else if (result === 5 || result === 6) {
      BALANCE += currentBet * multiplierGroupTwo;
      wonAmount += currentBet * multiplierGroupTwo;
    } else if (result === 7) {
      BALANCE += currentBet * multiplierSeven;
      wonAmount += currentBet * multiplierSeven;
    }
    setTimeout(() => {
      R2C1i.classList.add("winning-img");
      R2C2i.classList.add("winning-img");
      R2C3i.classList.add("winning-img");
    }, delay);
  }
  if (R3C1 === R3C2 && R3C2 === R3C3) {
    let result = Number(R3C1);
    if (result <= 4) {
      BALANCE += currentBet * multiplierGroupOne;
      wonAmount += currentBet * multiplierGroupOne;
    }
    if (result === 5 || result === 6) {
      BALANCE += currentBet * multiplierGroupTwo;
      wonAmount += currentBet * multiplierGroupTwo;
    }
    if (result === 7) {
      BALANCE += currentBet * multiplierSeven;
      wonAmount += currentBet * multiplierSeven;
    }
    setTimeout(() => {
      R3C1i.classList.add("winning-img");
      R3C2i.classList.add("winning-img");
      R3C3i.classList.add("winning-img");
    }, delay);
  }
  // // X shape
  if (R1C1 === R2C2 && R2C2 === R3C3) {
    let result = Number(R1C1);
    if (result <= 4) {
      BALANCE += currentBet * multiplierGroupOne;
      wonAmount += currentBet * multiplierGroupOne;
    }
    if (result === 5 || result === 6) {
      BALANCE += currentBet * multiplierGroupTwo;
      wonAmount += currentBet * multiplierGroupTwo;
    }
    if (result === 7) {
      BALANCE += currentBet * multiplierSeven;
      wonAmount += currentBet * multiplierSeven;
    }
    setTimeout(() => {
      R1C1i.classList.add("winning-img");
      R2C2i.classList.add("winning-img");
      R3C3i.classList.add("winning-img");
    }, delay);
  }
  if (R1C3 === R2C2 && R2C2 === R3C1) {
    let result = Number(R1C3);
    if (result <= 4) {
      BALANCE += currentBet * multiplierGroupOne;
      wonAmount += currentBet * multiplierGroupOne;
    }
    if (result === 5 || result === 6) {
      BALANCE += currentBet * multiplierGroupTwo;
      wonAmount += currentBet * multiplierGroupTwo;
    }
    if (result === 7) {
      BALANCE += currentBet * multiplierSeven;
      wonAmount += currentBet * multiplierSeven;
    }
    setTimeout(() => {
      R1C3i.classList.add("winning-img");
      R2C2i.classList.add("winning-img");
      R3C1i.classList.add("winning-img");
    }, delay);
  }
  // ^ and v shape
  if (R1C1 === R2C2 && R2C2 === R1C3) {
    let result = Number(R1C1);
    if (result <= 4) {
      BALANCE += currentBet * multiplierGroupOne;
      wonAmount += currentBet * multiplierGroupOne;
    }
    if (result === 5 || result === 6) {
      BALANCE += currentBet * multiplierGroupTwo;
      wonAmount += currentBet * multiplierGroupTwo;
    }
    if (result === 7) {
      BALANCE += currentBet * multiplierSeven;
      wonAmount += currentBet * multiplierSeven;
    }
    setTimeout(() => {
      R1C1i.classList.add("winning-img");
      R2C2i.classList.add("winning-img");
      R1C3i.classList.add("winning-img");
    }, delay);
  }
  if (R3C1 === R2C2 && R2C2 === R3C3) {
    let result = Number(R3C1);
    if (result <= 4) {
      BALANCE += currentBet * multiplierGroupOne;
      wonAmount += currentBet * multiplierGroupOne;
    }
    if (result === 5 || result === 6) {
      BALANCE += currentBet * multiplierGroupTwo;
      wonAmount += currentBet * multiplierGroupTwo;
    }
    if (result === 7) {
      BALANCE += currentBet * multiplierSeven;
      wonAmount += currentBet * multiplierSeven;
    }
    setTimeout(() => {
      R3C1i.classList.add("winning-img");
      R2C2i.classList.add("winning-img");
      R3C3i.classList.add("winning-img");
    }, delay);
  }

  setTimeout(() => {
    targetBalance.textContent = BALANCE;
    wonDisplay.textContent = wonAmount;
    playButton.disabled = false;
    lowerBet.disabled = false;
    raiseBet.disabled = false;
  }, delay);
}
