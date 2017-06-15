// (function(){
//   'use strict';

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
      'text': 'x'
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

  //===================Here are our divs:
  for (var i = 0; i < calButtons.length; i++) {

    var buttonNode = document.createElement('div');
    buttonNode.setAttribute('id', calButtons[i].id);
    calNode.appendChild(buttonNode);

    var displayText = document.createElement('p');
    displayText.setAttribute('class', 'button-val');
    displayText.textContent = calButtons[i].text;
    buttonNode.appendChild(displayText);

    if (calButtons[i].id !== 'displayField' && calButtons[i].id !== 'equals') {
      buttonNode.setAttribute('class', 'inputButton');
    } else if (calButtons[i].id === 'displayField') {
      buttonNode.setAttribute('class', 'displayButton');
    } else if (calButtons[i].id === 'equals') {
      buttonNode.setAttribute('class', 'inputButton');
    };

  };

  //===================Let's press some buttons:
  var inputButtons = document.querySelectorAll('.inputButton');
  var display = document.getElementById('displayField');


  //===================Apply event listeners:
  for (let i = 0; i < inputButtons.length; i++) {
    inputButtons[i].addEventListener('click', mathFunction);
  };

  //===================Some variables & functions for your calculating enjoyment:
  var result = 0;
  var equation = '';
  var equationArray = [];
  var clickedButton = '';

  function add(computeArray) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log(num1, num2);
    return num1 + num2;
  }

  function subtract(computeArray) {
    var num1 = parseFloat(computeArray[0]);
    var num2 = parseFloat(computeArray[2]);
    console.log(num1, num2);
    return num1 - num2;
  }

  function multiply(computeArray) {
    var num1 = parseFloat(computeArray[0]);
    var num2 = parseFloat(computeArray[2]);
    var result = num1 * num2;
    return result;
  }

  function divide(computeArray){
    var num1 = parseFloat(computeArray[0]);
    var num2 = parseFloat(computeArray[2]);
    console.log(num1, num2);
    return num1 / num2;
  }

  //===================Event handler function:
  function mathFunction(event) {
    clickedButton = event.target.textContent;

    if (clickedButton === 'C') {
      display.textContent = '';

    }
      else if (clickedButton === '.') {
      display.textContent += clickedButton;

    }
      else if (clickedButton === 'x' || clickedButton === '/' || clickedButton === '+' || clickedButton === '-') {
      display.textContent += ' ' + clickedButton + ' ';

    }
      else if (clickedButton === '=') {
      //eval the equation and run appropriate fn based on operator
      equation = display.textContent;
      console.log('before split: ', equation);
      equationArray = equation.split(' ');
      console.log('equation: ', equationArray);


      for (let i = 0; i < equationArray.length; i++) {

        if (equationArray[i] === '+') {
          result = add(equationArray);
          console.log(result);
          display.textContent = result;

        } else if (equationArray[i] === '-') {
          result = subtract(equationArray);
          console.log(result);
          display.textContent = result;

        } else if (equationArray[i] === 'x') {
          result = multiply(equationArray);
          console.log(result);
          display.textContent = result;

        } else /*if (equationArray[i] === '/')*/ {
          result = divide(equationArray);
          console.log(equationArray);
          display.textContent = result;
        }

        // } else {
        //   console.log("error");
        //   display.textContent = 'error';
        // }
      };

    } else {
      display.textContent += clickedButton;
      console.log('before equals:', display.textContent);

    }

    return result;
  }


  // var equals = document.getElementById('equals');
  // equals.addEventListener('click', getButtonValue);



//   function getButtonValue(e) {
//     var firstNumber;
//     var secondNumber;
//     var storedButtons = [];
//     var mathButtons;
//     var clickedButton;
//     var displayContent;
//
//
//     clickedButton = e.target.textContent;
//     display.textContent = displayContent;
//     console.log('clickedButton: ', clickedButton);
//
//     if (clickedButton === 'C') {
//       display.textContent = '';
//       firstNumber;
//       secondNumber;
//       mathButtons;
//       storedButtons = [];
//       clickedButton = '';
//       console.log(storedButtons);
//     };
//
//     //capture first number
//     if (clickedButton !== 'C' && clickedButton !== 'x' && clickedButton !== '/' && clickedButton !== '+' && clickedButton !== '-') {
//       display.textContent = clickedButton;
//       storedButtons[0] = clickedButton;
//       console.log(storedButtons);
//
//     }
//
//     //capture operator
//     if (clickedButton === 'x' || clickedButton === '/' || clickedButton === '+' || clickedButton === '-') {
//       display.textContent = clickedButton;
//       storedButtons[1] = clickedButton;
//       console.log(storedButtons);
//     }
//
//     //capture second number
//     if ((mathButtons) && (display.textContent !== 'C' && display.textContent !== 'x' && display.textContent !== '/' && display.textContent !== '+' && display.textContent !== '-')) {
//       secondNumber = display.textContent;
//       console.log('secondNumber: ', secondNumber);
//       console.log(storedButtons);
//       return secondNumber;
//     }
//
//     console.log(storedButtons);
//     var equation = firstNumber + " " + mathButtons + " " + secondNumber;
//     console.log(equation);
//     return equation;
//
//
//
// }



    // function captureFirst(){
    //   //capture first number
    //
    //   if (display.textContent !== 'C' && display.textContent !== 'x' && display.textContent !== '/' && display.textContent !== '+' && display.textContent !== '-') {
    //     display.textContent = firstNumber;
    //     storedButtons.push(firstNumber);
    //     console.log('firstNumber: ', firstNumber);
    //     return firstNumber;
    //   };
    // }
    // var one = captureFirst();
    //
    // if (one){
    //   function captureOperator() {  //capture math operator
    //     if (display.textContent === 'x' || display.textContent === '/' || display.textContent === '+' || display.textContent === '-') {
    //       display.textContent = mathButtons;
    //       storedButtons.push(mathButtons);
    //       console.log('mathButtons: ', mathButtons);
    //       console.log('stored:', storedButtons);
    //       return mathButtons;
    //     };
    //   }
    //   var op = captureOperator();
    // }
    //
    // if (one && op){
    //   function captureSecond(){  //capture second number
    //     if (display.textContent !== 'C' && display.textContent !== 'x' && display.textContent !== '/' && display.textContent !== '+' && display.textContent !== '-') {
    //       display.textContent = secondNumber;
    //       storedButtons.push(secondNumber);
    //       console.log('secondNumber: ', secondNumber);
    //       return secondNumber;
    //     };
    //   }
    //
    //   var two = captureSecond();
    // }


    // console.log(storedButtons);

    // captureEquation();

    // if (clickedButton) {
    //   firstNumber = clickedButton;
    //   storedButtons = clickedButton;
    //   console.log('firstNumber: ', firstNumber);
    //   console.log('storedButtons: ', storedButtons);
    // } else if (clickedButton === 'x' || clickedButton === '/' || clickedButton === '+' || clickedButton === '-') {
    //   display.textContent = clickedButton;
    //   mathButtons = clickedButton;
    //   console.log('mathButtons: ', mathButtons);
    // }

    // if (clickedButton === 'C') {
    //   display.textContent = '';
    // }


    // console.log(clickedButton);
    // console.log(storedButtons);
    // return clickedButton;
  // }




  //================================This is the calculator piece
  // function calculator() {

      // var pickOne = getButtonValue();
      // pickOne = parseFloat(pickOne);
      // console.log(pickOne);
      // return pickOne;
    // var displayContent = display.textContent;
    // var firstNumber = '';
    // var secondNumber = '';
    // var operator = '';
    // var error = function() {
    //   display.textContent = 'error';
    // // };
    //
    // var pickFirstNumber = function() {
    //   if (displayContent === ''){
    //     return;
    //   }
    //   firstNumber = parseFloat(display.textContent);
    //   console.log(firstNumber);
    //   return firstNumber;
    //
    //   // var pickOne = prompt("Please enter a number");
    //   // pickOne = parseFloat(pickOne);
    //   // console.log(pickOne);
    //   // return pickOne;
    // };

    // var heyThisIsFirst = pickFirstNumber();
    // console.log(heyThisIsFirst);
    //
    //
    // var pickOperator = function() {
    //    if (displayContent !== '') {
    //      operator = display.textContent;
    //      console.log(operator);
    //      return operator;
    //    }
    //    return error();
    //  }
      // var choice = prompt("Choose +, -, *, or /");
      //
      // if (choice === '+') {
      //   choice = 'ADD'
      // } else if (choice === '-') {
      //   choice = 'MINUS';
      // } else if (choice === '*') {
      //   choice = 'MULT';
      // } else {
      //   choice = 'DIVIDE';
      // }
      // console.log(choice);
      // return choice;
    // };
    // var doThisMath = pickOperator();

    // var pickSecondNumber = function() {
    //   if (displayContent !== '') {
    //     secondNumber = parseFloat(display.textContent);
    //     console.log(secondNumber);
    //     return secondNumber;
    //   }
    //   return error();
      // var pickTwo = prompt("Please enter a number");
      // pickTwo = parseFloat(pickTwo);
      // console.log(pickTwo);
      // return pickTwo;
    // };

    // var secondNumber = pickSecondNumber();
    //
  //   function calculate(num1, op, num2) {
  //     if (op === '+') {
  //       return num1 + num2;
  //     } else if (op === '-'){
  //       return num1 - num2;
  //     } else if (op === '*') {
  //       return num1 * num2;
  //     } else {
  //       return num1 / num2;
  //     };
  //   }
  //
  //   var result = calculate(firstNumber, operator, secondNumber);
  //   console.log(result);
  // }

  //
  // }
  // calculator();

// }());
