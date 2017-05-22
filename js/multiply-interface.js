// var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
  $('#multiply-form').submit(function(event) {
    event.preventDefault();
    var number1 =  parseInt($("#mul1").val());
    var number2 = parseInt($("#mul2").val());
    var newCalculator = new Calculator(number1, number2);
    var output = newCalculator.multiply(number1, number2);
    $("#multiply-result").append("<p>" + number1  + " * " + number2 + " = " + output + "</p>");
  });
});
