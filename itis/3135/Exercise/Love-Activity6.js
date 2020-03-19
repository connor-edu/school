/**
 * Converts a number grade to a letter grade.
 * @param {number} num Number Grade
 */
function replaceGrades(num) {
  if (num >= 100) {
    return `A`;
  }

  if (num >= 80) {
    return `B`;
  }

  if (num >= 70) {
    return `C`;
  }

  if (num >= 60) {
    return `D`;
  }

  return `F`;
}

/**
 * Continue executing this loop, until told to inside the loop.
 */
// eslint-disable-next-line no-constant-condition
while (true) {
  /**
   * Ask the user for a number.
   */
  // eslint-disable-next-line no-alert
  let num = prompt(`Enter a number grade from 0 to 120\nEnter -1 to end.`);
  /**
   * Try and convert the string into a number.
   */
  num = Number.parseFloat(num);
  /**
   * If the string is not a number we just continue asking.
   */
  if (Number.isNaN(num)) {
    continue;
  }

  /**
   * If the number is `-1` we stop asking.
   */
  if (num === -1) {
    break;
  }

  /**
   * Show the number and its corresponding letter grade.
   */
  // eslint-disable-next-line no-alert
  alert(`Number Grade = ${num}\nLetter Grade = ${replaceGrades(num)}`);
}
