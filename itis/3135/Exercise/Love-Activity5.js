// Global variables
let prevCalc = 0;
let calc = "";
const displayScreen = document.getElementById("txtNumber");

document.addEventListener("click", (e) => {
  /**
   * if the clicked element was a number on the keypad,
   * add its value to the "display screen"
   *
   * Note: this removes the need to repeatly register the same event
   * for multiple elements.
   */
  if (e.target && e.target.classList.contains("number")) {
    displayScreen.value += e.target.getAttribute("value");
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
    displayScreen.value = "";
    calc = "Add";
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
    displayScreen.value = "";
    calc = "Minus";
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
    displayScreen.value = "";
    calc = "Times";
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
    displayScreen.value = "";
    calc = "Pow";
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
    if (calc === "Add") {
      total += num;
    } else if (calc === "Minus") {
      total -= num;
    } else if (calc === "Times") {
      total *= num;
    } else if (calc === "Pow") {
      total = Math.pow(total, num);
    }

    displayScreen.value = total;
  }
}

function clear() {
  displayScreen.value = "";
  prevCalc = 0;
  calc = "";
}

/**
 * Bind all of our special functions to their respectful buttons.
 */
document.getElementById("btnCalc").addEventListener("click", calculate);
document.getElementById("btnDecrement").addEventListener("click", decrement);
document.getElementById("btnIncrement").addEventListener("click", increment);
document.getElementById("btnReset").addEventListener("click", clear);
document.getElementById("btnPlus").addEventListener("click", add);
document.getElementById("btnMinus").addEventListener("click", minus);
document.getElementById("btnTimes").addEventListener("click", times);
document.getElementById("btnPow").addEventListener("click", pow);
document.getElementById("btnPow2").addEventListener("click", pow2);
document.getElementById("btnSqrt").addEventListener("click", sqrt);
document.getElementById("btnFloor").addEventListener("click", floor);
document.getElementById("btnRound").addEventListener("click", round);
