const words = ['level', 'hello', 'racecar', 'world', 'madam'];

const palindromes = words.filter(function(item) {
  return item === item.split('').reverse().join('');
});

console.log(palindromes); 

