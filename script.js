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

const person = { name: "Gentrit", age: 30, adress: "Storavagen" };

console.log(person);

//Exercise 14
function getPropertyValue(obj, propName) {
  return obj[propName];
}

console.log(getPropertyValue(person, "adress"));

//Exercise 15
