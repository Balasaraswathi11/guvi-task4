
const isPalindrome = str => 
  str.split('').reverse().join('') === str;

const array = ["madam", "hello", "level", "world", "radar", "noon"];

const palindromes = array.filter(word => isPalindrome(word));

console.log(palindromes);


