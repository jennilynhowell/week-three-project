// (function(){
//   'use strict';

  function calculator() {
    var pickFirstNumber = function() {
      var pickOne = prompt("Please enter a number");
      pickOne = parseFloat(pickOne);
      console.log(pickOne);
      return pickOne;
    };
    var firstNumber = pickFirstNumber();


    var pickOperator = function() {
      var choice = prompt("Choose +, -, *, or /");

      if (choice === '+') {
        choice = 'ADD'
      } else if (choice === '-') {
        choice = 'MINUS';
      } else if (choice === '*') {
        choice = 'MULT';
      } else {
        choice = 'DIVIDE';
      }
      console.log(choice);
      return choice;
    };
    var doThisMath = pickOperator();

    var pickSecondNumber = function() {
      var pickTwo = prompt("Please enter a number");
      pickTwo = parseFloat(pickTwo);
      console.log(pickTwo);
      return pickTwo;
    };

    var secondNumber = pickSecondNumber();

    function calculate(num1, op, num2) {

      if (op === 'ADD') {
        return num1 + num2;
      } else if (op === 'MINUS'){
        return num1 - num2;
      } else if (op === 'MULT') {
        return num1 * num2;
      } else {
        return num1 / num2;
      };

    }

    var result = calculate(firstNumber, doThisMath, secondNumber);
    console.log(result);

  }



  // function addSomeStuff(num1, num2){
  //   return num1, num2;
  // }
  //
  // function subtractSomeStuff(num1, num2) {
  //   return num1 - num2;
  // }
  //
  // function multiplySomeStuff(num1, num2) {
  //   return num1 * num2;
  // }
  //
  // function divideSomeStuff(num1, num2){
  //   return num1 / num2;
  // }

// }());
