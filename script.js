//Exercise 6
function removeLetterAtGivenIndex(text, position) {
  const arrayTest = text.trim().split("");

  console.log(arrayTest);

  arrayTest.splice(position, 1);

  let fullText = arrayTest.join("");

  return fullText;
}

console.log(removeLetterAtGivenIndex("Gentrit", 2));
