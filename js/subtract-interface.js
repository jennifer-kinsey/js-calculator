var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
  $('#subtract-form').submit(function(event) {
    event.preventDefault();
    var number1 =  parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var newCalculator = new Calculator(number1, number2);
    var output = newCalculator.subtract(number1, number2);
    $("#subtract-result").append("<p>" + number1  + " - " + number2 + " = " + output + "</p>");
  });
});
