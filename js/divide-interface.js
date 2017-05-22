var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
  $('#divide-form').submit(function(event) {
    event.preventDefault();
    var number1 =  parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    var newCalculator = new Calculator(number1, number2);
    var output = newCalculator.divide(number1, number2);
    $("#divide-result").append("<p>" + number1  + " / " + number2 + " = " + output + "</p>");
  });
});
