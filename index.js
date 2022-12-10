function reverse(word){
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the inputted string
  const reversedWord = reverse(word);

  return word === reversedWord;
}

/* 
  Add your pseudocode here
  reverse the inputted string

  if the input is the same as the reversed output
      return true;
    else 
    return false;
*/

/*
  Add written explanation of your solution here
  make a function that returns true if a word is palindrome(it reads the same forward and backward) and false if not
    first reverse the input string(javascript doesn't have the functionality that you can reverse your word directly,
    so first you must split that string into an array then you reverse that array and finally you join that array into a string)
     then if the input is the same as the reversed input it should return true
     if else it should return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
