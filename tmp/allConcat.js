var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
  $('#add-form').submit(function(event) {
    event.preventDefault();
    var number1 =  parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var newCalculator = new Calculator(number1, number2);
    var output = newCalculator.add(number1, number2);
    $('#add-result').append("<p>" + number1 + " + " + number2 + " = " + output + "</p>");
  });
});

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
