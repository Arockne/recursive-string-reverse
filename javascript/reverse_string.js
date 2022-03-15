
//i
  //string
//o
  //reversed string
//e
  //empty string
//c
  //none
function reverseString(str) {
  if (str.length === 0) {
    return str
  }
  const firstChar = str[0]
  const reversedString = reverseString(str.slice(1))
  return reversedString + firstChar
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString('hi'));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString('catbaby'));

  console.log("");

  console.log("Expecting: 'esrever'");
  console.log("=>", reverseString('reverse'));

  console.log("");

  console.log("Expecting: 'oloy'");
  console.log("=>", reverseString('yolo'));

  console.log("");

  console.log("Expecting: 'gnirts'");
  console.log("=>", reverseString('string'));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
