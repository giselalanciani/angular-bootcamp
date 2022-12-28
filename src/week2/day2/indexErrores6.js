(function () {
  "use strict";
  var willPass = "Hi there";
  var wontPass = "nope";

  console.log(`willPass = ${willPass}`);
  console.log(`wontPass = ${wontPass}`);

  let someArr = [1, 2, 3, 4];

  function giveMe(inx) {
    if (someArr.length > inx) {
      return someArr[inx];
    } else {
      return "no existe";
    }
  }

  for (let counter = 0; counter <= someArr.length; counter++) {
    console.log(`Index = ${counter}, value = ${giveMe(counter)}`);
  }

  console.log("The code continues");
})();
// <!-- Now it's your turn to make some changes
//     - Refactor the previous code to make it work
//     - Add some kind of failsafe to never get an undefined while accessing the array
//     - Do an Assertion

//     ****************************************************
//     ****               BONUS POINTS                 ****
//     ****  Investigate about other console methods   ****
//     ****       and give me some kind of demo        ****
//     ****************************************************
// -->
