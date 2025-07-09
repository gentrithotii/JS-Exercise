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

function checkIfLeapYear() {
  let num = parseInt(document.getElementById("check-leap").value);

  console.log("Entered number: " + num);

  let isLeap = "Is not Leap year";

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
    console.log(date.getMonth(), date.getDate());

    date.setFullYear(date.getFullYear() + 1);
    if (date.getMonth() === 0 && days[date.getDay()] === "Sunday") {
      console.log("Date between: " + date);
      document.getElementById("date-between").innerHTML = date;
    }
  }
}

checkIfSundayBetweenYears();
displayCurrentDate();
checkIfLeapYear();
