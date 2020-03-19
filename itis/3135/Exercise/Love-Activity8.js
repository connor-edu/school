/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
const names = [`Tom`, `Lily`, `Jose`, `Sarah`];
const height = [65, 60, 72, 68];

/**
 * Why use two different array for this?
 * Could lead to issues when there are people with the same height,
 * and or the same name.
 *
 * Alternatively this should be an array
 * of objects with a `name` and `height` property.
 */
const people = [
  [`Tom`, 65],
  [`Lily`, 60],
  [`Jose`, 72],
  [`Sarah`, 68],
];

const $ = function $(id) {
  return document.getElementById(id);
};

function showResult() {
  /**
   * Using the two array method.
   * // If the spread operator is not supported then `Math.max.apply(null, height)` should be used.
   * const tallestIndex = height.indexOf(Math.max(...height));
   * const tallestName = names[tallestIndex];
   * const tallestHeight = height[tallestIndex];
   * const average = height.reduce((a, b) => a + b, 0) / height.length;
   */
  const [[tallestName, tallestHeight]] = people.sort((a, b) => b[1] - a[1]);
  const average = people.reduce((a, b) => a + b[1], 0) / people.length;
  $(
    `result`
  ).innerHTML = `<p>Average Height = ${average}</p><p>Highest Height = ${tallestName} with a height of ${tallestHeight}.</p>`;
}

function displayHeight() {
  $(`height_table`).innerHTML = `<thead>
    <tr>
      <th>Name</th>
      <th>Height</th>
    </tr>
  </thead>
  <tbody>
  ${people
    .map((person) => {
      return `
    <tr>
      <td>${person[0]}</td>
      <td>${person[1]}</td>
    </tr>`;
    })
    .join(`\n`)}
  </tbody>`;
  /**
   * If using the two array method, then the following should be the correct html.
   */
  let tableHtml = `<thead>
  <tr>
    <th>Name</th>
    <th>Height</th>
  </tr>
</thead>
<tbody>`;
  for (let i = 0; i < names.length; i++) {
    tableHtml += `
    <tr>
      <td>${names[i]}</td>
      <td>${height[i]}</td>
    </tr>`;
  }

  tableHtml += `</tbody>`;
}

function focusName() {
  $(`name`).focus();
}

function addHeight() {
  const name = $(`name`).value;
  if (!name || name.length === 0) {
    alert(`You must enter a name and a valid height.`);
    focusName();
    return;
  }

  let _height = $(`height`).value;
  if (!_height || _height.length === 0) {
    alert(`You must enter a name and a valid height.`);
    $(`height`).focus();
    return;
  }

  _height = Number.parseFloat(_height);

  if (Number.isNaN(_height)) {
    alert(`You must enter a name and a valid height.`);
    $(`height`).focus();
    return;
  }

  if (_height < 0 || _height > 100) {
    alert(`You must enter a name and a valid height.`);
    $(`height`).focus();
    return;
  }

  names.push(name);
  height.push(_height);
  people.push([name, _height]);
  $(`name`).value = ``;
  $(`height`).value = ``;

  focusName();
}

function heightEnter(e) {
  if (e.key === `Enter`) {
    addHeight();
  }
}

function onload() {
  $(`show_results`).addEventListener(`click`, showResult);
  $(`add`).addEventListener(`click`, addHeight);
  $(`display_height`).addEventListener(`click`, displayHeight);
  setTimeout(focusName);
  $(`height`).addEventListener(`keypress`, heightEnter);
}

window.addEventListener(`load`, onload);
