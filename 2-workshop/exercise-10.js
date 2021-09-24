function exercise10() {
  // Exercise 10
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let lineNumber = 7;
  let triangle = "";
  for (let i = 1; i <= lineNumber; i++) {
    for (let j = 0; j < i; j++) {
      triangle += "#";
    }
    triangle += "\n";
  }
  console.log(triangle);
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}
exercise10()
// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-10

module.exports = exercise10;
