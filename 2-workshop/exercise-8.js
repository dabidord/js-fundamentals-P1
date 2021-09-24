function exercise8() {
  // Exercise 8
  //
  // Write a program that will output the sum of all of the multiples of four
  // between 0 and 5000
  //
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let sum = 0
  for (let number = 0; number <= 5000; number++) {
    if (number % 4 === 0 && number !== 0) {
      sum = sum + number
    }
  }
  console.log(`The sum is ${sum}`);
  //This is NOT working! 
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}
exercise8()
// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-8
module.exports = exercise8;
