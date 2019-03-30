//Reverse a string
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

reverseString("hello");

//Find the Factorial of a number
function factorialize(num) {
  var fnum = 1;
  for (var i = 1; i <= num; i++) {
    fnum = fnum * i;
  }
  return fnum;
}

factorialize(5);

//Find the Longest word's Length
function findLongestWordLength(str) {
  var a = str.split(" ");
  var r = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i].length > r) {
      r = a[i].length;
    }
  }
  return r;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
