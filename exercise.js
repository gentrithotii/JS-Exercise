// Exercise

function displayCurrentDate() {
  const currentDate = new Date();
  const formatedDate =
    currentDate.getMonth() +
    "-" +
    currentDate.getDate() +
    "-" +
    currentDate.getFullYear();
  document.getElementById("currentDateTime").innerHTML = formatedDate;
}

function checkIfLeapYear(event) {
  event.preventDefault();
  let num = parseInt(document.getElementById("check-leap").value);
  // console.log("Entered number: " + num);

  let isLeap = "It's not leap year";

  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    isLeap = "Is Leap year";
  }

  document.getElementById("leap-boolean").innerHTML = isLeap;

  return false;
}

function checkIfSundayBetweenYears() {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const numberOfYears = 2050 - 2014;
  const date = new Date(2014, 0, 1);
  for (let i = 1; i <= numberOfYears; i++) {
    // console.log(date.getMonth(), date.getDate());

    date.setFullYear(date.getFullYear() + 1);
    if (date.getMonth() === 0 && days[date.getDay()] === "Sunday") {
      // console.log("Date between: " + date);
      document.getElementById("date-between").innerHTML = date.toLocaleString();
    }
  }
}

function multiplyOperation(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divisionOperation(firstNum, secondNum) {
  if (secondNum === 0) {
    throw new Error("Cant divide by 0 1");
  }
  console.log(firstNum + secondNum);
  return firstNum / secondNum;
}

function mathOperation(event) {
  event.preventDefault();

  const firstNum = parseInt(document.getElementById("num-1").value);
  const secondNum = parseInt(document.getElementById("num-2").value);
  let result;

  const clickedButtonId = event.submitter.id;

  if (clickedButtonId === "multiply-operation") {
    console.log("Multiplication");
    result = multiplyOperation(firstNum, secondNum);
  } else if (clickedButtonId === "divide-operation") {
    console.log("Division");
    result = divisionOperation(firstNum, secondNum);
  }

  document.getElementById("math-result").innerHTML = "Result is: " + result;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function heatConvertion(event) {
  event.preventDefault();

  const getNumber = parseFloat(document.getElementById("cf-number").value);

  console.log("Entered number: ", getNumber);

  let result;

  if (document.getElementById("c-f").checked) {
    result = celsiusToFahrenheit(getNumber);
  } else if (document.getElementById("f-c").checked) {
    result = fahrenheitToCelsius(getNumber);
  }

  document.getElementById("cf-convert-result").innerHTML =
    "Result is: " + result;
}

function removeLetterAtGivenIndex(text, position) {
  const arrayTest = text.trim().split("");

  console.log(arrayTest);

  arrayTest.splice(position, 1);

  let fullText = arrayTest.join("");

  return fullText;
}

console.log(removeLetterAtGivenIndex("Gentrit", 2));

//Exercise 19 and 20

function returnFormfNameAndLName(event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;

  console.log("Test");

  document.getElementById("full-name-display").innerHTML =
    "Full name is: " + firstName + " " + lastName;
}

function changeParagraphColor() {
  document.getElementById("full-name-display").style.backgroundColor = "Orange";
}

checkIfSundayBetweenYears();
displayCurrentDate();
checkIfLeapYear();
