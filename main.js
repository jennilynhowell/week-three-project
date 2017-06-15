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
    var num1 = parseFloat(num1);
    var num2 = parseFloat(num2);
    var result = num1 + num2;
    return result;
  }

  function subtract(computeArray) {
    var num1 = parseFloat(computeArray[0]);
    var num2 = parseFloat(computeArray[2]);
    var result = num1 - num2;
    return result;
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
    var result = num1 / num2;
    return result;
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

        } else if (equationArray[i] === '/') {
          result = divide(equationArray);
          console.log(result);
          display.textContent = result;
        }

      };

    } else {
      display.textContent += clickedButton;
      console.log('before equals:', display.textContent);

    }

    return result;
  }


}());
