//Exercise 6

function removeLetterAtGivenIndex(text, position) {
  const arrayTest = text.trim().split("");

  console.log(arrayTest);

  arrayTest.splice(position, 1);

  let fullText = arrayTest.join("");

  return fullText;
}

console.log(removeLetterAtGivenIndex("Gentrit", 2));

//Exercise 7

function reverseString(text) {
  return text.split("").reverse().join("");
}

console.log(reverseString("Gentrit"));

//Exercise 8

function addAllArrayNums(arrayOfNums) {
  let sum = 0;
  for (let nums of arrayOfNums) {
    sum += nums;
  }

  return sum;
}

const arrayNums = [2, 32, 6, 12];
console.log("All added upp: ", addAllArrayNums(arrayNums));

//Exercise 9

function largestElementInArray(arrayNums) {
  let biggestNumber = 0;

  for (let nums of arrayNums) {
    if (nums > biggestNumber) {
      biggestNumber = nums;
    }
  }

  return biggestNumber;
}

console.log(largestElementInArray(arrayNums));

let arrayNumsTwo = [1, 53, 23, 64, 313, 272, 4, 17, 22, 6, 8, 81, 123, 5742, 2];

//Exercise 10

function filterOutEvenNumbers(arrayNums) {
  let evenNumbers = [];
  for (let nums of arrayNums) {
    if (nums % 2 === 0) {
      evenNumbers.push(nums);
    }
  }

  return evenNumbers;
}

console.log(filterOutEvenNumbers(arrayNumsTwo));

//Exercise 11 same as 10

//Exercise 12

console.log(arrayNums.map((num) => num * num));

//Exercise 13

let person = { name: "Gentrit", age: 30, adress: "Storavagen" };

console.log(person);

//Exercise 14

function getPropertyValue(obj, propName) {
  return obj[propName];
}

console.log(getPropertyValue(person, "adress"));

//Exercise 15

function addPropertyToObject(obj, propName) {
  let newObj = { ...obj, propName };
  return newObj;
}

function removePorpertyFromObject(obj, propName) {
  delete obj[propName];
  return obj;
}

person = addPropertyToObject(person, "number");

person = removePorpertyFromObject(person, "age");
console.log(person);

//Exercise 16

const personOne = {
  name: "Gentrit",
  age: 30,
  adress: {
    street: "Road three",
    zip: "56234",
    city: "Big city",
  },
  height: 175,
};

console.log(personOne);

//Exercise 17

const entriesArray = Object.entries(personOne);

const filteredEntiries = entriesArray.filter(([key, value]) => {
  console.log("Yo");
  if (key === "age") {
    if (value % 2 === 0) {
      return value;
    }
  }
});

console.log(filteredEntiries);
