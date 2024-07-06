/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let arr = s.split("");
  for (let i = 0; i < arr.length - 1; ) {
    if (
      arr[i].toLowerCase() === arr[i + 1].toLowerCase() &&
      arr[i] !== arr[i + 1]
    ) {
      arr.splice(i, 2);
      if (i > 0) {
        i--;
      }
    } else {
      i++;
    }
  }
  return arr.join("");
};