(function(){
  'use strict';

  //================================This is the array of buttons
  var calButtons = [
    {
      'id': 'clear',
      'text': 'C'
    },
    {
      'id': 'displayField',
      'text': ''
    },
    {
      'id': 'seven',
      'text': '7'
    },
    {
      'id': 'eight',
      'text': '8'
    },
    {
      'id': 'nine',
      'text': '9'
    },
    {
      'id': 'divide',
      'text': '/'
    },
    {
      'id': 'four',
      'text': '4'
    },
    {
      'id': 'five',
      'text': '5'
    },
    {
      'id': 'six',
      'text': '6'
    },
    {
      'id': 'multiply',
      'text': 'X'
    },
    {
      'id': 'one',
      'text': '1'
    },
    {
      'id': 'two',
      'text': '2'
    },
    {
      'id': 'three',
      'text': '3'
    },
    {
      'id': 'subtract',
      'text': '-'
    },
    {
      'id': 'zero',
      'text': '0'
    },
    {
      'id': 'decimal',
      'text': '.'
    },
    {
      'id': 'equals',
      'text': '='
    },
    {
      'id': 'add',
      'text': '+'
    }
  ];

  //================================This is the HTML-build piece
  var siteBody = document.querySelector('body');
  var calNode = document.createElement('section');
  calNode.setAttribute('class', 'calculator');
  siteBody.appendChild(calNode);

  for (var i = 0; i < calButtons.length; i++) {

    var buttonNode = document.createElement('div');
    buttonNode.setAttribute('id', calButtons[i].id);
    calNode.appendChild(buttonNode);

    var displayText = document.createElement('p');
    displayText.textContent = calButtons[i].text;
    buttonNode.appendChild(displayText);

  };

  //================================This is the calculator piece
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
  // calculator();

}());
