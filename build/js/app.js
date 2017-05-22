(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/calculator.js":1}]},{},[2]);
