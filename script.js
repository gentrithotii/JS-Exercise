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

const arrayNums = [2, 2, 6, 12];
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

//Exercise 10
