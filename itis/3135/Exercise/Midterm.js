/* eslint-disable no-alert */
const days = [
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
  `Sunday`,
];
const expenditure = [20, 12, 15, 10, 30, 25, 40];

const $ = function(id) {
  return document.getElementById(id);
};

function updateExpenditure() {
  const day = $(`day`).value;
  const dayIndex = days.indexOf(day);
  let num = $(`expenditure`).value;
  num = Number.parseFloat(num);
  $(`expenditure`).value = ``;
  if (Number.isNaN(num)) {
    alert(`Enter a valid number.`);
    return;
  }

  expenditure[dayIndex] += num;
  alert(`Your updated expenditures are: ` + expenditure.join(`, `));
}

function showTotalExp() {
  $(`total_expenditure_display`).value =
    `$` + expenditure.reduce((a, b) => a + b, 0).toFixed(2);
  $(`total_expenditure_display`).style.color = `red`;
  $(`total_expenditure_display`).style.backgroundColor = `transparent`;
}

function showMax() {
  const dayIndex = expenditure.indexOf(Math.max.apply(null, expenditure));
  $(`showMax`).innerText = `Your maximum expenditure is $${expenditure[
    dayIndex
  ].toFixed(2)} on ${days[dayIndex]}`;
}

function load() {
  $(`update`).addEventListener(`click`, updateExpenditure);
  $(`total_expenditure`).addEventListener(`click`, showTotalExp);
  $(`show_max`).addEventListener(`mouseover`, showMax);
}

window.addEventListener(`load`, load);
