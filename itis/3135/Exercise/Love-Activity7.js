// Global variables
let prevCalc = 0;
let calc = ``;
const displayScreen = document.getElementById(`txtNumber`);

document.addEventListener(`click`, (e) => {
  /**
   * if the clicked element was a number on the keypad,
   * add its value to the "display screen"
   *
   * Note: this removes the need to repeatly register the same event
   * for multiple elements.
   */
  if (e.target && e.target.classList.contains(`number`)) {
    displayScreen.value += e.target.getAttribute(`value`);
  }
});

/**
 * The following function decreases the value of displayed number by 1.
 * isNaN method checks whether the value passed to the method is a number or not.
 */
function decrement() {
  let num = parseFloat(displayScreen.value);
  if (!Number.isNaN(num)) {
    num--;
    displayScreen.value = num;
  }
}

/**
 * The following function decreases the value of displayed number by 1.
 * isNaN method checks whether the value passed to the method is a number or not.
 */
function increment() {
  let num = parseFloat(displayScreen.value);
  if (!Number.isNaN(num)) {
    num++;
    displayScreen.value = num;
  }
}

/**
 * The following function is called when "Add" button is clicked.
 * Note that it also changes the values of the global variables.
 */
function add() {
  const num = parseFloat(displayScreen.value);
  if (!Number.isNaN(num)) {
    prevCalc = num;
    displayScreen.value = ``;
    calc = `Add`;
  }
}

/**
 * The following function is called when "Minus" button is clicked.
 * Note that it also changes the values of the global variables.
 */
function minus() {
  const num = parseFloat(displayScreen.value);
  if (!Number.isNaN(num)) {
    prevCalc = num;
    displayScreen.value = ``;
    calc = `Minus`;
  }
}

/**
 * The following function is called when "Minus" button is clicked.
 * Note that it also changes the values of the global variables.
 */
function times() {
  const num = parseFloat(displayScreen.value);
  if (!Number.isNaN(num)) {
    prevCalc = num;
    displayScreen.value = ``;
    calc = `Times`;
  }
}

function divide() {
  const num = parseFloat(displayScreen.value);
  if (!Number.isNaN(num)) {
    prevCalc = num;
    displayScreen.value = ``;
    calc = `Divide`;
  }
}

/**
 * The following function is called when "Pow" button is clicked.
 * Note that it also changes the values of the global variables.
 */
function pow() {
  const num = parseFloat(displayScreen.value);
  if (!Number.isNaN(num)) {
    prevCalc = num;
    displayScreen.value = ``;
    calc = `Pow`;
  }
}

/**
 * Takes the current number on the screen and squares it.
 */
function pow2() {
  const num = parseFloat(displayScreen.value);
  if (!Number.isNaN(num)) {
    displayScreen.value = Math.pow(num, 2);
  }
}

/**
 * Takes the current number on the screen and square roots it.
 */
function sqrt() {
  const num = parseFloat(displayScreen.value);
  if (!Number.isNaN(num)) {
    displayScreen.value = Math.sqrt(num);
  }
}

/**
 * Takes the current number on the screen and floors it.
 */
function floor() {
  const num = parseFloat(displayScreen.value);
  if (!Number.isNaN(num)) {
    displayScreen.value = Math.floor(num);
  }
}

/**
 * Takes the current number on the screen and rounds it.
 */
function round() {
  const num = parseFloat(displayScreen.value);
  if (!Number.isNaN(num)) {
    displayScreen.value = Math.round(num);
  }
}

/**
 * The following function is called when "Calculate" button is clicked.
 * Note that this function is dependent on the value of global variable.
 */
function calculate() {
  const num = parseFloat(displayScreen.value);
  if (!Number.isNaN(num)) {
    let total = prevCalc;
    if (calc === `Add`) {
      total += num;
    } else if (calc === `Minus`) {
      total -= num;
    } else if (calc === `Times`) {
      total *= num;
    } else if (calc === `Divide`) {
      total /= num;
    } else if (calc === `Pow`) {
      total = Math.pow(total, num);
    }

    displayScreen.value = total;
  }
}

function clear() {
  displayScreen.value = ``;
  prevCalc = 0;
  calc = ``;
}

function addClickHandler(id, func) {
  document.getElementById(id).addEventListener(`click`, func);
}

/**
 * Bind all of our special functions to their respectful buttons.
 */
addClickHandler(`btnCalc`, calculate);
addClickHandler(`btnDecrement`, decrement);
addClickHandler(`btnIncrement`, increment);
addClickHandler(`btnReset`, clear);
addClickHandler(`btnPlus`, add);
addClickHandler(`btnMinus`, minus);
addClickHandler(`btnTimes`, times);
addClickHandler(`btnDivide`, divide);
addClickHandler(`btnPow`, pow);
addClickHandler(`btnPow2`, pow2);
addClickHandler(`btnSqrt`, sqrt);
addClickHandler(`btnFloor`, floor);
addClickHandler(`btnRound`, round);
