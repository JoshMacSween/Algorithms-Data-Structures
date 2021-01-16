// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let numString = n.toString();

  for (let x of numString) {
    let result = Math.sign(numString);
    if (result == 1) {
      console.log("positive");
    } else if (result == -1) {
      console.log("negative");
    } else {
      console.log("zero");
    }
  }
}

reverseInt(0);

module.exports = reverseInt;
