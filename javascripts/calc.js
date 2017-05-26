var leftHand = '';
var operator = '';
var rightHand = '';
var result = '';
var clearButton = document.getElementById('clear_button');
var equalButton = document.getElementById('equal_button');
var numberButtons = document.getElementsByClassName('number_button');
var operatorButtons = document.getElementsByClassName('op_button');
var screen = document.getElementById('screen');


function setScreen(disp) {
  screen.innerText = disp

}

for(var i = 0; i < operatorButtons.length; i++) {
  var button = operatorButtons[i];
  button.addEventListener('click', function() {
    // TODO: probably check for a left hand before we set an operator
    operator = this.innerText;
    setScreen(leftHand + operator + rightHand);
  });
}

for(var i = 0; i < numberButtons.length; i++) {
  var button = numberButtons[i];
  button.addEventListener('click', function() {
    if(operator.length){
      // TODO: do not allow divide by 0 here!
      rightHand += this.innerText;
      setScreen(leftHand + operator + rightHand);
  }else{
      leftHand += this.innerText;
      setScreen(leftHand + operator + rightHand);
  };
    });
}

clearButton.addEventListener('click', function(){
    screen.innerText = ""
    leftHand = ""
    rightHand = ""
    operator = ""
});

equalButton.addEventListener('click', function() {
  console.log(leftHand);
  console.log(operator);
  console.log(rightHand);
  

  if(leftHand && operator && rightHand) {
    switch(operator) {
      case '+':
        result = parseFloat(leftHand) + parseFloat(rightHand);
        setScreen(result)
        break;
      case '-':
        result = parseFloat(leftHand) - parseFloat(rightHand);
        setScreen(result);
        break;
      case 'X':
        result = parseFloat(leftHand) * parseFloat(rightHand);
        setScreen(result)
        break;
      case '/':
        result = parseFloat(leftHand) / parseFloat(rightHand);
        setScreen(result)
        break;
      default:
       alert('Invalid Operator!');
    }
  } else {
    // TODO: make it more user friendly by telling them what they are missingi
    alert('Invalid Equation!');
  }
});