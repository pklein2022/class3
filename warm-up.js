function isInteger(num) {
  return Number.isInteger(num);
}
console.log(isInteger(5));
// isInteger(2) // returns true
// isInteger(2.3) // returns false
// isInteger(true) // returns false
// isInteger('2') // returns false