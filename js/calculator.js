function Calculator(num1, num2){
  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.add = function(num1, num2) {
  add = num1 + num2;
  return add;
};

Calculator.prototype.subtract = function(num1, num2) {
  subtract = num1 - num2;
  return subtract;
};

Calculator.prototype.multiply = function(num1, num2) {
  multiply = num1 * num2;
  return multiply;
};

Calculator.prototype.divide = function(num1, num2) {
  divide = num1 / num2;
  return divide;
};

exports.calculatorModule = Calculator;
